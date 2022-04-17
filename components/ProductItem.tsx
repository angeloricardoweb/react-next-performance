import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.name} - <strong>{product.price}</strong>{" "}
    </div>
  );
}

/**
 * Antes da primeira etapa de renderização (Criar uma nova versão do componente)
 * compara produndamente o valor da propriedade anterior
 * com o valor da nova propriedade,
 * caso tenham ocorridos mudanças,
 * ele renderediza novamente o componente,
 * caso não,
 * mantém o componente atual
 */
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * Quando usar
 * 1. Componentes puros
 * 2. Componentes que renderizam demais
 * 3. Componentes médios pra grandes
 */
