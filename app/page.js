import Hero from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id="featured"
        title="Featured Work"
        subtitle="A few recent projects across systems, full stack, and applied AI"
        action={{ href: "/projects/", label: "All projects" }}
      >
        <ProjectGrid projects={projects.filter((p) => p.featured)} badgeFirst="Latest" />
      </Section>
    </>
  );
}
