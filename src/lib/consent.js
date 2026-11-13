// Cookie consent state shared by the banner and the scripts it gates.
export const CONSENT_KEY = "cookieConsent";
export const CONSENT_EVENT = "jenisys:consent";

export function readConsent() {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === null ? null : v === "true";
  } catch {
    return null;
  }
}

export function writeConsent(granted) {
  try {
    window.localStorage.setItem(CONSENT_KEY, granted ? "true" : "false");
  } catch {
    /* storage blocked: the choice still applies for this page view */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { granted } }));
}
