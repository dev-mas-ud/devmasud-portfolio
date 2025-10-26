import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";
import Timeline from "@/components/Timeline";

const experience: any[] = [
  {
    role: "Front-End Developer | Contract",
    company: "TechNova Solutions",
    date: "Jan 2024 - Apr 2024",
    logo: "/images/technova.png",
    description:
      "Assisted in developing client websites, handled UI bug fixes, and implemented reusable components.",

    skills: ["React", "JavaScript", "TailwindCSS", "API Integration"],
  },
  {
    role: "Front-End Engineer | Intern",
    company: "NNPC",
    date: "May 2024 - Aug 2024",
    logo: "/images/nnpc.png",
    description:
      "Developed and maintained responsive front-end interfaces using React and TailwindCSS, improving user experience and performance across multiple projects.",
    skills: ["React", "HTML", "JavaScript", "TailwindCSS"],
  },
  {
    role: "Web Developer | Part-Time",
    company: "Digital Waves",
    date: "Jun 2023 - Dec 2023",
    logo: "/images/digitalwaves.png",
    description:
      "Collaborated with designers to build dynamic landing pages and dashboards, improving site load speed by 30%.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    role: "Front-End Developer | Remote",
    company: "Freelance",
    date: "Sep 2024 - Present",
    logo: "/images/freelance.jpg",
    description:
      "Developing responsive and scalable web apps using modern technology.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
    ],
  },
];

export default function WorkExperience() {
  return (
    <Box
      as="section"
      bg="neutralDark"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 5, md: 16 }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        w="full"
        alignItems={"start"}
        justifyContent="space-between"
        gap={{ base: 0, md: 12 }}
      >
        <Box w={{ base: "full", md: "70%", lg: "40%" }} px={{ base: 2, md: 0 }}>
          <Stack>
            <Box>
              <HeadingMarker text="hands-on" />
              <H2Heading color="baseLight" mb={6}>
                Work Experience
              </H2Heading>
            </Box>
          </Stack>
          <Text fontSize="1.12em" lineHeight={1.9} mb={10} color="gray.300">
            Every project taught me something new about code, design, and the
            people behind great products. This journey is a reflection of
            continuous learning and progress.
          </Text>
        </Box>

        <Box px={{ base: 4, md: 0 }}>
          <Timeline items={experience} />
        </Box>
      </Flex>
    </Box>
  );
}
