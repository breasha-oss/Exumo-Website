export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-start font-semibold tracking-[-0.03em] ${className}`}>
      Exumo
      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        className="ml-[0.12em] mt-[0.05em] h-[0.42em] w-[0.42em] text-lime"
      >
        <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
      </svg>
    </span>
  );
}
