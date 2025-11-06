import {
  Column,
  Schema,
  Meta,
  RevealFx,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
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
          <Projects />
        </RevealFx>
      </div>
    </Column>
  );
}
