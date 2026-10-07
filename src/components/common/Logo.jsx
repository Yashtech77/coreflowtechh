const logoSrc = "/branding/coreflow-technologies-logo.jpeg";

export default function Logo({ variant = "header" }) {
  if (variant === "footer") {
    return (
      <img
        src={logoSrc}
        alt="Coreflow Technologies LLP — Innovating Digital Excellence"
        width={1382}
        height={878}
        loading="lazy"
        className="block h-auto w-64 max-w-full rounded-md"
      />
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Coreflow Technologies LLP"
      width={1382}
      height={878}
      fetchPriority="high"
      className="block h-12 w-auto max-w-full rounded-sm object-contain sm:h-14"
    />
  );
}
