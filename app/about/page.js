import Image from "next/image";
import Certifications from "@/components/Certifications";
import Coursework from "@/components/Coursework";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { about, profile } from "@/data/portfolio";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "Education, skills, certifications, and background of software engineer Vanshika Shah.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About me"
        title="Hi, I’m"
        accent={profile.firstName}
        asideFirst
        aside={
          <div className={styles.portrait}>
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              className={styles.portraitImg}
              sizes="280px"
            />
          </div>
        }
      >
        <div className={styles.bio}>
          {about.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className={styles.actions}>
          {profile.resumeUrl && <Button href={profile.resumeUrl}>View Résumé</Button>}
          <Button href="/experience/" variant="ghost">
            See my experience
          </Button>
        </div>
      </PageHeader>

      <Education />
      <Skills />
      <Certifications />
      <Coursework />
    </>
  );
}
