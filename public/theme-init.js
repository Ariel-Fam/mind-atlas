try {
  const theme = localStorage.getItem("mind-atlas-theme") || "system";
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    theme === "dark" || (theme === "system" && prefersDark) ? "dark" : "light";
} catch {}
