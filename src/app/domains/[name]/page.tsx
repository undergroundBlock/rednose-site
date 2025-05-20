// src/app/domains/[name]/page.tsx
import { notFound } from "next/navigation";
import { categoriesData } from "@/data/categoriesManifest";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

function findDomainByName(name: string) {
  for (const category of Object.values(categoriesData)) {
    const domain = category.domains.find(d => d.name === name);
    if (domain) return { domain, categoryTitle: category.title };
  }
  return null;
}

export async function generateStaticParams() {
  const all = Object.values(categoriesData).flatMap(c => c.domains);
  return all.map(d => ({ name: d.name }));
}

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const found = findDomainByName(params.name);
  if (!found) return {};

  const { domain, categoryTitle } = found;
  const title = `${domain.name} — Premium ${categoryTitle} Domain | RedNose`;
  const description = `Buy ${domain.name}, a premium KNS domain listed in the ${categoryTitle} category.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/domains/${domain.name}`,
      images: [
        {
          url: "https://yourdomain.com/og-image.png",
          width: 1200,
          height: 630,
          alt: domain.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function DomainPage({ params }: { params: { name: string } }) {
  const found = findDomainByName(params.name);
  if (!found) return notFound();

  const { domain, categoryTitle } = found;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{domain.name}</h1>
      <p className="text-gray-700 mb-4">Category: {categoryTitle}</p>
      <p className="text-lg font-semibold mb-2">Price: {domain.price} KAS</p>
      <a
        href={domain.kaspaLink}
        target="_blank"
        className="text-purple-600 underline mb-4 inline-block"
      >
        View on Kaspa.com
      </a>

      {/* ✅ JSON-LD for search engines */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: domain.name,
          description: `Premium KNS domain in ${categoryTitle}`,
          category: categoryTitle,
          offers: {
            "@type": "Offer",
            priceCurrency: "KAS",
            price: domain.price,
            availability: "https://schema.org/InStock",
            url: `https://yourdomain.com/domains/${domain.name}`,
          },
        }}
      />
    </main>
  );
}
