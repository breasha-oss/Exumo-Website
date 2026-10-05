import { site } from "@/lib/site";

type Props = { variant?: "lime" | "ink" | "ghost"; className?: string; label?: string };

const styles = {
  lime: "bg-lime text-ink hover:bg-white",
  ink: "bg-ink text-paper hover:bg-forest",
  ghost: "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/20",
};

export default function DemoButton({ variant = "lime", className = "", label = "Book a demo" }: Props) {
  return (
    <a
      href={site.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {label}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
