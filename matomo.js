const MATOMO_URL = "https://githubzinktops.matomo.cloud/";
const MATOMO_SITE_ID = "1";

(() => {
  if (!MATOMO_URL && !MATOMO_SITE_ID) return;
  if (!MATOMO_URL || !/^[1-9]\d*$/.test(MATOMO_SITE_ID)) {
    console.error("Matomo: configurez une URL d'instance et un identifiant de site valides.");
    return;
  }

  let instanceUrl;
  try {
    instanceUrl = new URL(MATOMO_URL);
  } catch {
    console.error("Matomo: l'URL de l'instance n'est pas valide.");
    return;
  }

  if (
    instanceUrl.protocol !== "https:" ||
    instanceUrl.username ||
    instanceUrl.password ||
    instanceUrl.search ||
    instanceUrl.hash
  ) {
    console.error("Matomo: utilisez une URL HTTPS sans identifiants, paramètres ni fragment.");
    return;
  }

  const instanceBaseUrl = `${instanceUrl.origin}${instanceUrl.pathname.replace(/\/+$/, "")}/`;
  const scriptUrl = instanceUrl.hostname.endsWith(".matomo.cloud")
    ? new URL(`https://cdn.matomo.cloud/${instanceUrl.hostname}/matomo.js`)
    : new URL("matomo.js", instanceBaseUrl);
  window._paq = window._paq || [];
  window._paq.push(
    ["setDoNotTrack", true],
    ["disableCookies"],
    ["setTrackerUrl", new URL("matomo.php", instanceBaseUrl).href],
    ["setSiteId", MATOMO_SITE_ID],
    ["trackPageView"],
    ["enableLinkTracking"],
  );

  const script = document.createElement("script");
  script.async = true;
  script.src = scriptUrl.href;
  document.head.appendChild(script);
})();
