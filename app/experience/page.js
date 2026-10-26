import Timeline from "@/components/Timeline";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import StatPanel from "@/components/ui/StatPanel";
import { experience } from "@/data/portfolio";

export const metadata = {
  title: "Experience",
  description: "Software engineering roles across startups, AI systems, research, and teaching.",
};

export default function ExperiencePage() {
  const industry = experience.filter((e) => e.group === "industry");
  const academic = experience.filter((e) => e.group === "academic");

  return (
    <>
      <PageHeader
        kicker="Career"
        title="Work"
        accent="Experience"
        subtitle="Building production backends, LLM-powered features, and data pipelines at startups, plus research and two years of teaching at the University of Maryland."
        aside={
          <StatPanel
            title="At a glance"
            stats={[
              { value: industry.length, label: "Industry roles" },
              { value: academic.length, label: "Research & teaching" },
              { value: "90%", label: "Faster doc processing" },
              { value: "900+", label: "Students taught" },
            ]}
          />
        }
      />
      <Section id="industry" title="Industry" subtitle="Startups and engineering teams">
        <Timeline items={industry} />
      </Section>
      <Section id="academic" title="Research & Teaching" subtitle="University of Maryland">
        <Timeline items={academic} />
      </Section>
    </>
  );
}
