"use client";
import { useEffect, useRef } from "react";

// A twisting ribbon of light drawn from the Jenisys mark (navy → volt → signal).
// Raw WebGL (~3 KB), no libraries. Paused off-screen / on hidden tabs.
// Under prefers-reduced-motion it renders a single still frame.

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAG = `
precision mediump float;
uniform vec2 r;uniform float T;uniform vec2 m;uniform float shift;
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;
  float x=uv.x-shift;
  vec3 col=vec3(0.);
  for(int i=0;i<28;i++){
    float t=float(i)/27.*2.-1.;
    float tw=x*1.6+T*.30+m.x*.6;
    float cy=.20*sin(x*1.3+T*.22)+.05*sin(x*3.1-T*.37)+m.y*.06-.02;
    float w=.24+.06*sin(x*1.1+T*.18);
    float y=cy+w*t*cos(tw);
    float face=.35+.65*abs(sin(tw));
    float d=abs(uv.y-y);
    float g=.0022/(d+.0026);
    float edge=1.+1.6*smoothstep(.85,1.,abs(t));
    vec3 c=mix(vec3(.106,.165,.627),vec3(.298,.553,1.),smoothstep(-1.,.1,x+t*.15));
    c=mix(c,vec3(.078,.886,.976),smoothstep(.05,.95,x+.25*t));
    col+=c*g*face*edge;
  }
  col/=7.5;
  col*=smoothstep(-1.15,-.35,x);
  float a=clamp(max(col.r,max(col.g,col.b)),0.,1.);
  gl_FragColor=vec4(min(col,vec3(1.)),a);
}`;

export default function RibbonCanvas({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false, alpha: true, powerPreference: "low-power" });
    if (!gl) return;

    // Software-rendered WebGL (no GPU) would block the main thread: keep the static CSS backdrop instead.
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer)) return;
    // Low-power devices get one still frame; capable devices get the live ribbon.
    const lowPower = (navigator.hardwareConcurrency || 8) < 4 || (navigator.deviceMemory || 8) < 4;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "T");
    const uM = gl.getUniformLocation(prog, "m");
    const uShift = gl.getUniformLocation(prog, "shift");

    const reduce = lowPower || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    let running = false;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const start = performance.now() - 8000;

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      const aspect = canvas.clientWidth / Math.max(1, canvas.clientHeight);
      // On wide screens push the ribbon right of the headline; centred on phones.
      gl.uniform1f(uShift, aspect > 1.3 ? aspect * 0.14 : 0.0);
    };

    const draw = (now) => {
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.uniform1f(uT, (now - start) / 1000);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (reduce || running || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw(performance.now());
    canvas.style.opacity = "1";
    play();

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      visible ? play() : pause();
    });
    io.observe(canvas);
    const onVis = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVis);
    const onMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`h-full w-full opacity-0 transition-opacity duration-700 ${className}`}
    />
  );
}
