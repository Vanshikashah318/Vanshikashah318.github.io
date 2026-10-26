import Image from "next/image";
import { coreFocus, highlights, profile } from "@/data/portfolio";
import Button from "./ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.intro}>
              <div className={styles.avatar}>
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  className={styles.avatarImg}
                  sizes="128px"
                  priority
                />
              </div>
              <div className={styles.kicker}>{profile.kicker}</div>
            </div>

            <h1 className={styles.name}>
              {profile.firstName} <em>{profile.lastName}</em>
            </h1>
            <p className={styles.subtitle}>{profile.subtitle}</p>
            <p className={styles.desc}>{profile.description}</p>

            <div className={styles.actions}>
              <Button href="/contact/">Get in Touch</Button>
              <Button href="/projects/" variant="ghost">
                View Projects
              </Button>
              {profile.resumeUrl && (
                <Button href={profile.resumeUrl} variant="ghost">
                  Résumé
                </Button>
              )}
            </div>

            <div className={styles.meta}>
              <span className={styles.pill}>📍 {profile.location}</span>
              <a className={styles.pill} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              {profile.phone && (
                <a className={styles.pill} href={`tel:${profile.phone.replace(/\D/g, "")}`}>
                  {profile.phone}
                </a>
              )}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.glass}>
              <div className={styles.panelTitle}>Highlights</div>
              <div className={styles.statGrid}>
                {highlights.map((h) => (
                  <div className={styles.stat} key={h.label}>
                    <div className={styles.statNum}>{h.value}</div>
                    <div className={styles.statLabel}>{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.glass}>
              <div className={styles.panelTitle}>Core Focus</div>
              <div className={styles.focusList}>
                {coreFocus.map((item) => (
                  <span className={styles.chip} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
