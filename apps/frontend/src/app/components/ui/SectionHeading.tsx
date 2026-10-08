type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "max-w-2xl mb-12",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 text-center mx-auto ${className}`}>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
        {eyebrow}
      </span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
        {title}
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}