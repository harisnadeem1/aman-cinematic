import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className,
}: Props) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-6xl font-semibold tracking-tight text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}