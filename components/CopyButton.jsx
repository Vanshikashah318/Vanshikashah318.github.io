"use client";

import { useEffect, useState } from "react";
import styles from "./ContactSheet.module.css";

const LABELS = { copied: "Copied ✓", failed: "Couldn’t copy" };

// Copies `text` to the clipboard and briefly confirms (or reports failure), then resets.
export default function CopyButton({ text, label = "Copy" }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(() => setStatus("idle"), 1800);
    return () => clearTimeout(t);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <button type="button" className={styles.copy} onClick={copy} aria-live="polite">
      {LABELS[status] ?? label}
    </button>
  );
}
