import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero";
import { LatestBlog } from "./components/LatestBlog/LatestBlog";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <main className="h-[100vh] snap-y snap-mandatory overflow-auto">
      <Hero />
      <Work />
      <LatestBlog />
      <Contact />
    </main>
  );
}
