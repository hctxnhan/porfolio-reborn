import { Hero } from "./components/Hero";
import { LatestBlog } from "./components/LatestBlog/LatestBlog";
import { TechStack } from "./components/TechStack/TechStack";

export default function Home() {
  return (
    <main className="snap-mandatory snap-y h-[100vh] overflow-auto">
      <Hero />
      <TechStack />
      <LatestBlog />
    </main>
  );
}
