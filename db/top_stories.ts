import stories_post_1 from "@/public/content/stories/stories_post01.jpg";
import stories_post_2 from "@/public/content/stories/stories_post02.jpg";
import stories_post_3 from "@/public/content/stories/stories_post03.jpg";
import stories_post_4 from "@/public/content/stories/stories_post04.jpg";
import { StaticImageData } from "next/image";

export interface Story {
  title: string;
  des: string;
  date: string;
  Image: StaticImageData; // Use `StaticImageData` type for Next.js images
}

export interface Story_2 {
  serial_number: string;
  title: string;
  date: string;
}

const top_stories_1: Story[] = [
  {
    title: "Politics",
    des: "Lessons Learned As A Designer-Founder",
    date: "27 August, 2024",
    Image: stories_post_1,
  },
  {
    title: "Modern",
    des: "A Complete Guide To Live Validation UX",
    date: "27 August, 2024",
    Image: stories_post_2,
  },
  {
    title: "Sports",
    des: "Building A Retro Draggable Web",
    date: "27 August, 2024",
    Image: stories_post_3,
  },
  {
    title: "Fashion",
    des: "Rethinking Star Ratings For Readers",
    date: "27 August, 2024",
    Image: stories_post_4,
  },
];

const top_stories_2: Story_2[] = [
  {
    serial_number: "1",
    title: "Awersing Instagram tawo promote your",
    date: "27 August, 2024",
  },
  {
    serial_number: "2",
    title: "Rethinking Star Ratings For Readers",
    date: "27 August, 2024",
  },
  {
    serial_number: "3",
    title: "Headless In Times Of Accessibility",
    date: "27 August, 2024",
  },
  {
    serial_number: "4",
    title: "Making S WAI-ARIA A Comprehensive Guide",
    date: "27 August, 2024",
  },
  // {
  //   serial_number: "5",
  //   title: "UX Checklists For Interface Designers",
  //   date: "27 August, 2024",
  // },
];

const politics_post: Story_2[] = [
  {
    serial_number: "1",
    title: "Awersing Instagram tawo promote your",
    date: "27 August, 2024",
  },
  {
    serial_number: "2",
    title: "Rethinking Star Ratings For Readers",
    date: "27 August, 2024",
  },
]

// top stories 1 data default export
export default top_stories_1;

// top stories 2 data name export
export { top_stories_2, politics_post };
