import type { Metadata } from "next";
import Script from "next/script";
import { About } from "@/components/About";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { NavBar } from "@/components/NavBar";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ProcessSection } from "@/components/ProcessSection";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { getSiteSettings } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: "Tinashe Gore | Bespoke Carpentry & Custom Woodwork Studio",
    description:
      "Hand-built furniture and custom woodwork crafted with precision. Book a free consultation today.",
    keywords: [
      "bespoke carpentry",
      "custom furniture",
      "handmade woodwork",
      "custom cabinetry",
      "fine joinery",
      "carpenter Victoria Falls",
      "carpenter Zimbabwe",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Tinashe Gore | Bespoke Carpentry & Custom Woodwork Studio",
      description:
        "Hand-built furniture and custom woodwork crafted with precision.",
      url: "/",
      siteName: settings.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Tinashe Gore bespoke carpentry showcase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinashe Gore | Bespoke Carpentry Studio",
      description:
        `Custom furniture, cabinetry, and fine woodwork handcrafted in ${settings.city}.`,
      images: ["/opengraph-image"],
    },
  };
}

export default async function Home() {
  const settings = await getSiteSettings();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: settings.businessName,
    description:
      "Bespoke carpentry, custom furniture, cabinetry and fine woodwork studio.",
    url: settings.siteUrl,
    telephone: settings.phone,
    email: settings.email,
    priceRange: "$$",
    image: `${settings.siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.streetAddress,
      addressLocality: settings.city,
      addressCountry: settings.countryCode,
    },
    sameAs: [settings.instagramUrl, settings.facebookUrl],
  };

  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <NavBar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <PortfolioPreview />
        <ProcessSection />
        <Testimonials />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
