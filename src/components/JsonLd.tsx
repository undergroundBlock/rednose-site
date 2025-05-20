// src/components/JsonLd.tsx
type Props = {
  data: Record<string, any>;
};

export const JsonLd = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
