// src/components/DomainCard.tsx
"use client";

import { Domain } from "@/data/types";

export function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{domain.name}</h2>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            domain.listed
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {domain.listed ? "Listed" : "Unlisted"}
        </span>
      </div>
      <p>
        <strong>Price:</strong> {domain.price} KAS
      </p>
      <p>
        <strong>Seller Telegram:</strong>{" "}
        <a
          href={`https://t.me/${domain.sellerTelegram.replace("@", "")}`}
          target="_blank"
          className="text-blue-600 underline"
        >
          {domain.sellerTelegram}
        </a>
      </p>
      <a
        href={domain.kaspaLink}
        target="_blank"
        className="text-sm text-purple-700 underline"
      >
        View on Kaspa.com →
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: domain.name,
            description: "Premium KNS domain pointing to a Kaspa wallet. Perfect for identity, payments, or branding.",
            sku: `KNS-${domain.name}`,
            productID: domain.name,
            url: domain.kaspaLink,
            category: "KNS Domain",
            offers: {
                "@type": "Offer",
                price: domain.price,
                priceCurrency: "KAS",
                availability: domain.listed
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
                seller: {
                "@type": "Person",
                name: domain.sellerTelegram?.replace("@", "") || "Unknown",
                },
            },
            additionalProperty: [
                {
                "@type": "PropertyValue",
                name: "KNS Type",
                value: "Kaspa Domain Name",
                },
            ],
            }),
        }}
        />
    </div>
  );
}
