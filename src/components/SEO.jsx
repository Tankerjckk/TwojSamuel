import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image="/og-image.jpg",
  url=""
}) {
  const fullUrl = `https://twojsamuel.pl${url}`;
  const imageUrl = `https://twojsamuel.pl${image}`;

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "TwójSamuel",
  url: "https://twojsamuel.pl",
  image: imageUrl,
  description: description,
  genre: ["Hip Hop", "Rap"],
  sameAs: [
    "https://instagram.com/twojsamuel"
  ]
};

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="author"
        content="TwójSamuel"
      />

      <link
        rel="canonical"
        href={fullUrl}
      />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:url"
        content={fullUrl}
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

      <script type="application/ld+json">
{JSON.stringify(schemaData)}
</script>
    </Helmet>
  );
}