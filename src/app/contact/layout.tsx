import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | Contact Us | Indexland",
  description: "צרו קשר עם Indexland לקבלת מידע נוסף על שירותי ניהול נכסים והשקעות נדל\"ן | Contact Indexland for more information about asset management and real estate investment services",
  keywords: "צור קשר, contact, אודות, about, נדל\"ן, real estate, השקעות, investments",
  openGraph: {
    title: "צור קשר | Contact Us | Indexland",
    description: "צרו קשר עם Indexland לקבלת מידע נוסף על שירותי ניהול נכסים והשקעות נדל\"ן",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 