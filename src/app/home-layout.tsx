import { homepageMetadata } from "./homepage-metadata";

export const metadata = homepageMetadata;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
} 