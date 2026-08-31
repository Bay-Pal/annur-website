type IconName =
  | "mosque"
  | "graduation"
  | "leaf"
  | "heart"
  | "shield"
  | "certificate"
  | "badge"
  | "community"
  | "accountability"
  | "spark"
  | "search"
  | "map-pin";

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M11 20a9 9 0 0 0 9-9c0-3.5-1.8-6.5-4.5-8.2-3.2 0.4-6.2 2.1-8.2 4.7C5.5 9.8 5 11.6 5 13.5 5 17.1 7.9 20 11 20Z" />
          <path d="M5 19c4.5-1 8.4-4.3 11-8.7" />
        </svg>
      );
    case "graduation":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m3 9 9-4 9 4-9 4-9-4Z" />
          <path d="M7 11.2V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.8" />
          <path d="M21 9v6" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20.8 6.7c-1.3-2.1-4.1-2.7-6.2-1.4L12 6.8l-2.6-1.5C7.3 4 4.5 4.6 3.2 6.7 1.4 9.6 2.4 13.5 5 15.7l7 5 7-5c2.6-2.2 3.6-6.1 1.8-9Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3 5 6v6c0 5 3 8.4 7 9 4-.6 7-4 7-9V6l-7-3Z" />
          <path d="m9.2 12 1.9 2 3.8-4" />
        </svg>
      );
    case "mosque":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 20v-6c0-3.3 2.5-6 6-6s6 2.7 6 6v6" />
          <path d="M4 20h16" />
          <path d="M12 4.5V8" />
          <path d="M9 5.8 12 4l3 1.8" />
        </svg>
      );
    case "certificate":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 4h14v10H5z" />
          <path d="M8 8h8M8 11h5" />
          <path d="m14 15 1.4 4L18 17l2.6 2 .9-3.7" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m12 3 2.2 3.6 4.1.9-2.8 3.1.4 4.2-3.9-1.7-3.9 1.7.4-4.2-2.8-3.1 4.1-.9Z" />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 21a8 8 0 0 0 8-8c0-4-3-7-6.8-7H12a8 8 0 0 0 0 16Z" />
          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );
    case "accountability":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2a10 10 0 1 0 10 10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "map-pin":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}
