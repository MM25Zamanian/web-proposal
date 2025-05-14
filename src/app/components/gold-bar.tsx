import { cn } from "../utils/cn";

export default function GoldBar({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "h-3 shadow-lg shadow-black rounded-xs gold-gradient",
        className
      )}
    />
  );
}
