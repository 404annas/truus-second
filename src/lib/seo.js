export const siteConfig = {
  siteName: "The Sync Events",
  siteUrl: "https://www.thesyncevents.com",
  defaultTitle: "The Sync Events | Concerts, Activations, and Live Experiences",
  defaultDescription:
    "The Sync Events creates live concerts, artist bookings, brand activations, and memorable event experiences.",
  defaultImage: "/images4.jpg",
  instagram: "https://www.instagram.com/thesyncevents",
  contactEmails: [
    "m.osamakhan@thesyncevents.com",
    "qasimazhar@thesyncevents.com",
  ],
  keywords: [
    "The Sync Events",
    "event management",
    "artist bookings",
    "concert management",
    "brand activations",
    "corporate events",
    "live experiences",
    "festival production",
  ],
};

export function toAbsoluteUrl(path = "/") {
  if (!path) {
    return siteConfig.siteUrl;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}
