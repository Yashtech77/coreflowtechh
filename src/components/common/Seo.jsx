import { Helmet } from "react-helmet-async";

const SITE = "https://coreflowtech.in";

export default function Seo({
  title,
  description = "Coreflowtech delivers data centre solutions and IT infrastructure across India, and is an authorized KAYTUS, CxTEK, and AFS distributor.",
  path = "/",
}) {
  const fullTitle = title ? `${title} | Coreflowtech` : "Coreflowtech | Data Centre & IT Infrastructure";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE}${path}`} />
      <meta property="og:image" content={`${SITE}/og-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
