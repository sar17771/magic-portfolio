import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nicholson Nicholas",
  lastName: "Nicholas",
  name: `Nicholson Nicholas`,
  role: "Graphic Designer",
  avatar: "/images/avatar.jpg",
  email: "crouchrollsleep@gmail.com",
  location: "Asia/Kuala_Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Malaysia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+60149577144",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/nechalson",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Nicholson Nicholas, a graphic designer at{" "}
      <Logo
        dark
        icon="/images/logo.png"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft creative designs that reflect a brand's value and objectives.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A graphic designer specializing in brand identities and logo design, with 6+ years of experience spanning freelance and professional work. I excel at transforming ideas into creative designs that reflect a brand's value and objectives. Committed to delivering high-quality work that achieves impactful results while paying attention to every detail. Passionate about continuous learning and enhancing my design skills.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: " JSK Group of Companies ",
        timeframe: "2025 - Present",
        role: "Senior Graphic Designer",
        achievements: [
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: " G & A Group ",
        timeframe: "2018 - 2025",
        role: "Senior Graphic Designer cum Media Executive ",
        achievements: [
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Freelance Graphic Designer ",
        timeframe: "2022 - Present",
        role: "Freelancer ",
        achievements: [
        ],
        images: [],
      },
      {
        company: "Kementerian Kerajaan Tempatan dan Perumahan  ",
        timeframe: "2017",
        role: "IT Intern ",
        achievements: [
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: " Cosmopoint College Kota Kinabalu",
        description: <>Information Technology.</>,
      },
      {
        name: "Self Learning",
        description: <>Graphic Design and Web Development.</>,
      },
      {
        name: "Self Learning",
        description: <>Videography and Video Editing </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Creative Skills",
        description: (
          <>Specialized in creating compelling visual designs and multimedia content for brands and businesses.</>
        ),
        tags: [
          {
            name: "Logo & Branding",
          },
          {
            name: "Social Media Designs",
          },
          {
            name: "Design Marketing Ads",
          },
          {
            name: "Printing Designs",
          },
          {
            name: "Corporate Event Flyers",
          },
          {
            name: "Presentation Slides",
          },
          {
            name: "Videography",
          },
          {
            name: "Video Editing",
          },
          {
            name: "Photography",
          },
          {
            name: "e-Commerce Live Streaming",
          },
        ],
        images: [],
      },
      {
        title: "Software",
        description: (
          <>Proficient in industry-standard design and video editing software for creating professional work.</>
        ),
        tags: [
          {
            name: "Illustrator",
            icon: "illustrator",
          },
          {
            name: "Photoshop",
            icon: "photoshop",
          },
          {
            name: "Premiere Pro",
            icon: "premierepro",
          },
          {
            name: "After Effects",
            icon: "aftereffects",
          },
          {
            name: "Lightroom",
            icon: "lightroom",
          },
          {
            name: "Microsoft PowerPoint",
            icon: "powerpoint",
          },
          {
            name: "VMix Broadcasting Software",
          },
          {
            name: "Elementor",
            icon: "elementor",
          },
          {
            name: "WordPress",
            icon: "wordpress",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
