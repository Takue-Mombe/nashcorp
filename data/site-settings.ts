export interface SiteSettings {
  businessName: string;
  siteUrl: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  countryCode: string;
  hours: string;
  instagramUrl: string;
  facebookUrl: string;
  whatsappUrl: string;
}

export const defaultSiteSettings: SiteSettings = {
  businessName: "Tinashe Gore Carpentry Studio",
  siteUrl: "https://tinashegore.com",
  email: "hello@tinashegore.co.zw",
  phone: "775442989",
  streetAddress: "442 Miles Rd",
  city: "Victoria Falls",
  countryCode: "ZW",
  hours: "Mon-Fri, 8am - 5pm",
  instagramUrl: "https://www.instagram.com/tinashegore",
  facebookUrl: "https://www.facebook.com/tinashegore",
  whatsappUrl: "https://wa.me/263775442989",
};
