import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-TSHTRHL2BD";
const CONSENT_KEY = "twojsamuel_cookie_consent_v1";

function loadGA() {
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
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const savedConsent = JSON.parse(
      localStorage.getItem(CONSENT_KEY) || "{}"
    );

    if (savedConsent.analytics) {
      loadGA();
    }

    const consentHandler = (event) => {
      if (event.detail.analytics) {
        loadGA();

        window.gtag("config", GA_ID, {
          page_path: window.location.pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    };

    window.addEventListener("cookieConsentUpdated", consentHandler);

    return () => {
      window.removeEventListener("cookieConsentUpdated", consentHandler);
    };
  }, []);

  useEffect(() => {
    const savedConsent = JSON.parse(
      localStorage.getItem(CONSENT_KEY) || "{}"
    );

    if (!savedConsent.analytics) return;

    loadGA();

    window.gtag("config", GA_ID, {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}