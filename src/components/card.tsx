type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
};

export function Card({
  children,
  className = "",
  as: Tag = "article",
}: CardProps) {
  return (
    <Tag
      className={`rounded-2xl bg-white shadow-md ring-1 ring-black/5 ${className}`}
    >
      {children}
    </Tag>
  );
}
