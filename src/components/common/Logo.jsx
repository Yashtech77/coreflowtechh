const logoSrc = "/branding/coreflow-technologies-logo.jpeg";

export default function Logo({ variant = "header" }) {
  return (
    <span className="logo-horizontal" role="img" aria-label="Coreflow Technologies LLP">
      <span className="logo-mark" aria-hidden="true">
        <img src={logoSrc} alt="" width={1382} height={878} loading={variant === "footer" ? "lazy" : "eager"} />
      </span>
      <span className="logo-name" aria-hidden="true">
        <img src={logoSrc} alt="" width={1382} height={878} loading={variant === "footer" ? "lazy" : "eager"} />
      </span>
    </span>
  );
}
