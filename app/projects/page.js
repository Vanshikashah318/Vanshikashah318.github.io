import { ProjectGrid } from "@/components/ProjectCard";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects",
  description: "Selected technical work across systems, full-stack apps, and applied AI.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker={`${projects.length} projects`}
        title="Selected"
        accent="Work"
        subtitle="Systems programming, real-time collaboration, GPU computing, and applied machine learning: things I have built in and out of the classroom."
      />
      <section style={{ padding: "26px 0 8px" }}>
        <div className="container">
          <Reveal>
            <ProjectGrid projects={projects} badgeFirst="Latest" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
