import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  href?: string;
  thumbnail?: string;
  badge?: string;
  gradient?: "coral" | "mint" | "violet" | "sun";
  duration?: string;
  className?: string;
};

const gradMap = {
  coral: "bg-grad-coral",
  mint: "bg-grad-mint",
  violet: "bg-grad-violet",
  sun: "bg-grad-sun",
};

export function VideoThumb({
  title,
  href,
  thumbnail,
  badge,
  gradient = "coral",
  duration,
  className,
}: Props) {
  const Wrapper: any = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border/40 shadow-card",
        href && "cursor-pointer",
        className,
      )}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className={cn("absolute inset-0", gradMap[gradient])} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
          {badge}
        </span>
      )}
      {duration && (
        <span className="absolute right-3 top-3 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {duration}
        </span>
      )}
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
          <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="line-clamp-2 font-display text-sm font-semibold text-white">{title}</p>
      </div>
    </Wrapper>
  );
}
