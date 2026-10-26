import ContactSheet, { Interests } from "@/components/ContactSheet";
import Section from "@/components/ui/Section";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Vanshika Shah about software engineering roles and technical work.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.top}>
        <div className="container">
          <ContactSheet />
        </div>
      </section>
      <Section id="interests" title="What I’m Looking For" subtitle="The kind of work I do best">
        <Interests />
      </Section>
    </>
  );
}
