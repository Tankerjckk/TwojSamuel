import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image="/og-image.jpg",
  url=""
}) {
  const fullUrl = `https://www.twojsamuel.pl${url}`;
  const imageUrl = `https://www.twojsamuel.pl${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={fullUrl}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:type"
        content="image/jpeg"
      />

      <meta
        property="og:site_name"
        content="TwójSamuel"
      />

      <meta
        property="og:locale"
        content="pl_PL"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}