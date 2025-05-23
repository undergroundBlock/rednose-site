// src/app/domains/categories/index.ts

import { financeDomains } from "@/data/categories/finance";
import { gamingDomains } from "@/data/categories/gaming";
import { techDomains } from "@/data/categories/tech";

export const categoriesData = {
  finance: {
    title: "Finance",
    domains: financeDomains,
  },
  gaming: {
    title: "Gaming",
    domains: gamingDomains,
  },
  tech: {
    title: "Technology",
    domains: techDomains,
  },
};

export function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({ category }));
}