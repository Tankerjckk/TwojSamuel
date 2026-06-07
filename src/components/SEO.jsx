import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image = "/og-image.jpg",
  url = "",
}) {
  const fullUrl = `https://www.twojsamuel.pl${url}`;
  const imageUrl = `https://www.twojsamuel.pl${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.twojsamuel.pl/#person",
        name: "TwójSamuel",
        url: "https://www.twojsamuel.pl",
        image: imageUrl,
        jobTitle: "Raper",
        nationality: "Polish",
        sameAs: [
          "https://www.instagram.com/twojsamuel/",
          "https://www.youtube.com/@twojsamuel1744",
          "https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://www.twojsamuel.pl/#musicgroup",
        name: "TwójSamuel",
        url: "https://www.twojsamuel.pl",
        genre: ["Hip-Hop", "Rap"],
        sameAs: [
          "https://www.instagram.com/twojsamuel/",
          "https://www.youtube.com/@twojsamuel1744",
          "https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.twojsamuel.pl/#website",
        url: "https://www.twojsamuel.pl",
        name: "TwójSamuel",
        description: "Oficjalna strona TwójSamuel"
      }
    ]
  };

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

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}