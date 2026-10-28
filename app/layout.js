import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import styles from "./layout.module.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Software engineer building AI-driven systems, backend services, and full-stack products.";

export const metadata = {
  metadataBase: new URL("https://vanshikashah318.github.io"),
  title: {
    default: "Vanshika Shah | Portfolio",
    template: "%s | Vanshika Shah",
  },
  description,
  openGraph: {
    title: "Vanshika Shah | Software Engineer",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#f8f3ea",
};

// Runs before first paint: applies the saved theme (light by default) so a reader who chose
// dark mode never sees a flash of the light page. Kept tiny and dependency-free.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}})()`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: data-theme is set by themeScript before React hydrates.
    <html
      lang="en"
      data-theme="light"
      className={`${cormorant.variable} ${dmSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className={styles.shell}>
          <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
          <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
          <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />

          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
