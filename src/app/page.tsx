import {
  Column,
  Schema,
  Meta,
  RevealFx,
  Button,
} from "@once-ui-system/core";
import { home, about, person, baseURL, work } from "@/resources";
import { HomeContent } from "@/components/HomeContent";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" style={{ position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <HomeContent />
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <RevealFx fillWidth paddingTop="xl">
          <Column fillWidth gap="xl" horizontal="center">
            <Projects range={[1, 3]} />
            <RevealFx delay={0.3} horizontal="center" paddingTop="l">
              <Button
                href={work.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                View All Projects
              </Button>
            </RevealFx>
          </Column>
        </RevealFx>
      </div>
    </Column>
  );
}
