import { BlogList } from "./BlogList";
import { IBlogItem } from "./BlogItem";
import { Heading } from "@/src/components/Heading";
import { Button } from "@/src/components/Button";

const mockData: IBlogItem[] = [
  {
    title: "10 Tips for Successful Remote Work",
    description:
      "Learn how to be productive and happy while working from home.",
    image: "https://loremflickr.com/320/240?random=1",
  },
  {
    title: "The Benefits of Yoga for Your Body and Mind",
    description: "Discover the amazing health benefits of practicing yoga.",
    image: "https://loremflickr.com/320/240?random=1",
  },
  {
    title: "The Top 5 Travel Destinations for Nature Lovers",
    description:
      "Escape to these breathtaking destinations for a dose of natural beauty.",
    image: "https://loremflickr.com/320/240?random=1",
  },
  {
    title: "How to Start a Successful Blog in 2023",
    description:
      "Follow these expert tips and start your own successful blog today.",
    image: "https://loremflickr.com/320/240?random=1",
  },
  {
    title: "The Power of Positive Thinking: A Guide to Happiness",
    description:
      "Learn how to train your mind to be more positive and live a happier life.",
    image: "https://loremflickr.com/320/240?random=1",
  },
];
export function LatestBlog() {
  return (
    <div className="flex h-[100vh] w-full snap-start items-center justify-center p-8">
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex justify-between gap-4">
          <Heading size={"h2"} fontFamily={"alumniSans"}>
            Latest Blog
          </Heading>
          <Button variants={"link"} sizes={"medium"} icon="🤲">
            All posts
          </Button>
        </div>
        <BlogList items={mockData} />
      </div>
    </div>
  );
}
