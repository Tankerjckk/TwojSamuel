import { useEffect } from "react";

const GA_ID = "G-TSHTRHL2BD";

export default function GoogleAnalytics() {
  useEffect(() => {
    const loadGA = () => {
      if (window.gtag) return;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      window.gtag = gtag;

      gtag("js", new Date());

      gtag("config", GA_ID, {
        page_path: window.location.pathname,
      });
    };

    const savedConsent = JSON.parse(
      localStorage.getItem(
        "twojsamuel_cookie_consent_v1"
      ) || "{}"
    );

    if (savedConsent.analytics) {
      loadGA();
    }

    const consentHandler = (event) => {
      if (event.detail.analytics) {
        loadGA();
      }
    };

    window.addEventListener(
      "cookieConsentUpdated",
      consentHandler
    );

    return () => {
      window.removeEventListener(
        "cookieConsentUpdated",
        consentHandler
      );
    };
  }, []);

  return null;
}