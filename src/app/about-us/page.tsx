import PageContainer from "@/components/layout/PageContainer";
import TeamSection from "@/components/sections/TeamSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";

// Export metadata for SEO
export const metadata = {
  title: 'About Us - Indexland',
  description: 'Learn about Indexland\'s mission, vision, and team of real estate professionals.',
};

export default function AboutUsPage() {
  return (
    <PageContainer>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Indexland
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your trusted partner in real estate solutions and office management services.
            </p>
          </div>
          
          <TeamSection />
          <CoreValuesSection />
        </div>
      </div>
    </PageContainer>
  );
} 