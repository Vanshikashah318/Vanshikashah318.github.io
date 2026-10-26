import { contact, profile } from "@/data/portfolio";
import CopyButton from "./CopyButton";
import {
  ArrowUpRightIcon,
  ClockIcon,
  DocumentIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./ui/Icons";
import styles from "./ContactSheet.module.css";

// Strip the protocol and "www." so a URL reads as a handle, e.g. "linkedin.com/in/vshah3".
const display = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function ChannelRow({ href, icon, label, value, external = true }) {
  return (
    <a
      className={styles.row}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.rowIcon}>{icon}</span>
      <span className={styles.rowText}>
        <span className={styles.rowLabel}>{label}</span>
        <span className={styles.rowValue}>{value}</span>
      </span>
      <ArrowUpRightIcon className={styles.rowArrow} />
    </a>
  );
}

export default function ContactSheet() {
  return (
    <div className={styles.card}>
      <div className={styles.intro}>
        <div className={styles.status}>
          <span className={styles.pulse} aria-hidden="true" />
          {contact.availability}
        </div>
        <h1 className={styles.title}>
          {contact.title} <em>{contact.accent}</em>
        </h1>
        <p className={styles.text}>{contact.text}</p>

        <dl className={styles.facts}>
          <div>
            <dt>
              <PinIcon className={styles.factIcon} /> Based in
            </dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>
              <ClockIcon className={styles.factIcon} /> Time zone
            </dt>
            <dd>{contact.timezone}</dd>
          </div>
        </dl>
      </div>

      <div className={styles.sheet}>
        <div className={styles.primary}>
          <div className={styles.primaryHead}>
            <span className={styles.primaryIcon}>
              <MailIcon />
            </span>
            <div>
              <span className={styles.rowLabel}>Email · best way to reach me</span>
              <a className={styles.email} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
          <div className={styles.primaryActions}>
            <a className={styles.send} href={`mailto:${profile.email}`}>
              Send an email
            </a>
            <CopyButton text={profile.email} label="Copy address" />
          </div>
        </div>

        <div className={styles.rows}>
          <ChannelRow
            href={profile.links.linkedin}
            icon={<LinkedInIcon />}
            label="LinkedIn"
            value={display(profile.links.linkedin)}
          />
          <ChannelRow
            href={profile.links.github}
            icon={<GitHubIcon />}
            label="GitHub"
            value={display(profile.links.github)}
          />
          {profile.resumeUrl && (
            <ChannelRow
              href={profile.resumeUrl}
              icon={<DocumentIcon />}
              label="Résumé"
              value="View my latest résumé"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function Interests() {
  return (
    <div className={styles.interests}>
      {contact.interests.map((item, i) => (
        <article className={styles.interest} key={item.title}>
          <span className={styles.interestNum}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.interestTitle}>{item.title}</h3>
          <p className={styles.interestText}>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
