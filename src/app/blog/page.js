// src/app/blog/page.js

import Blog from '../../components/Blog';

export const metadata = {
  title: "Blog - Jenisys",
  description: "Read the latest news and articles from Jenisys. Stay tuned for updates on our blog.",
};

export default function Blogs() {
  return <Blog />;
}
