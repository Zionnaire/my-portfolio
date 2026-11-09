import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="wrap">
        © {new Date().getFullYear()} {site.name} · {site.company}
      </div>
    </footer>
  );
}
