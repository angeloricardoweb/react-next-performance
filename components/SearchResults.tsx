import { useEffect, useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  /**
   * useMemo
   * Usado para Memorizar resultados de calculos pesados
   * Ou para repassar como props para filhos
   * O Calculo só é feito novamente quando a dependência *results* sofrer alteração
   */
  const totalResults = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 20);
  }, [results]);

  return (
    <div>
      <h2>Total: {totalResults}</h2>
      {results.map((product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} onAddToWishList={onAddToWishList} />
          </div>
        );
      })}
    </div>
  );
}
