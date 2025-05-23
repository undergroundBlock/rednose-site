// src/app/domains/categories/[category]/page.tsx

import { notFound } from "next/navigation";
import { categoriesData } from "@/data/categoriesManifest";
import { DomainCard } from "@/components/DomainCard";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

// Make sure this is NOT a promise unless awaited properly
// If categoriesData is async, you must load it inside each function
// ❌ DON'T do this if it's async:
// const category = categoriesData[params.category];

export async function generateStaticParams() {
  const categories = await categoriesData; // ✅ await here if needed
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categories = await categoriesData; // ✅ await again here
  const category = categories[params.category];
  if (!category) return {};

  const title = `${category.title} | RedNose Domains`;
  const description = `Browse ${category.domains.length} premium ${params.category} KNS domains.`;

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

export default function CategoryPage({ params }: { params: { category: string } }) {
  // ❗ Only works if categoriesData is synchronous!
  const category = categoriesData[params.category];
  if (!category) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category.title}</h1>
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
