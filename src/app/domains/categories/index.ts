// src/app/domains/categories/index.ts

import { financeDomains } from "@/data/categories/finance";
import { gamingDomains } from "@/data/categories/gaming";
import { techDomains } from "@/data/categories/tech";

export const categories = {
  finance: financeDomains,
  gaming: gamingDomains,
  tech: techDomains,
};
