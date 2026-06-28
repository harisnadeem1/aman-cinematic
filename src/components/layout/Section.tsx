import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden py-24 md:py-40",
        className
      )}
    >
      {children}
    </section>
  );
}