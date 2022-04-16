import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      })}
    </div>
  );
}