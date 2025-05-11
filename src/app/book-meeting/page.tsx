import { Metadata } from "next";
import { SEO } from "@/constants/site";
import BookMeetingContent from './BookMeetingContent';

// הכנת ערכי מטה-דאטה
const metadataTitle = "קביעת פגישה | Indexland";
const metadataDescription = "קבעו פגישת ייעוץ עם המומחים שלנו";
const metadataKeywords = "פגישה, ייעוץ, נדל\"ן, השקעות, ליווי";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  keywords: metadataKeywords,
  openGraph: {
    images: [SEO.bookMeeting.ogImage],
  },
};

export default function BookMeeting() {
  return <BookMeetingContent />;
} 