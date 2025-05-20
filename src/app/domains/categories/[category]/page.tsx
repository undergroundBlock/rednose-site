// src/app/domains/categories/[category]/page.tsx
import { notFound } from "next/navigation";
import { categoriesData } from "@/data/categoriesManifest";
import { DomainCard } from "@/components/DomainCard";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd"; // 🔧 You'll need to create this

// ✅ Required for static export builds
export async function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({ category }));
}

// ✅ Dynamic metadata for SEO & social media
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categoriesData[params.category];
  if (!category) return {};

  const domainCount = category.domains.length;
  const categoryTitle = category.title;

  const title = `${categoryTitle} | RedNose Domains`;
  const description = `Browse ${domainCount} premium ${params.category} KNS domains listed on the RedNose marketplace. Easy to find special Kaspa address domains for ${params.category} enthusiasts.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/domains/categories/${params.category}`,
      siteName: "RedNose Domains",
      images: [
        {
          url: "https://yourdomain.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "RedNose Domains",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://yourdomain.com/twitter-image.png"],
    },
  };
}

// ✅ Main category page
export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoriesData[params.category];
  if (!category) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category.title}</h1>

      {/* ✅ Inject JSON-LD structured data */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${category.title} KNS Domains`,
          description: `Premium Kaspa KNS domains in the ${category.title} category.`,
          itemListElement: category.domains.map((domain, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://yourdomain.com/domains/categories/${params.category}#${domain.name}`,
            name: domain.name,
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Kaspa Address Domain",
                value: domain.name,
              },
              {
                "@type": "PropertyValue",
                name: "Price",
                value: `${domain.price} KAS`,
              },
            ],
          })),
        }}
      />

      <div className="grid gap-4">
        {category.domains.map((domain, i) => (
          <DomainCard key={i} domain={domain} />
        ))}
      </div>
    </main>
  );
}
