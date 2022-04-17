## 🚧 Trabalhnado nisso

O Objetivo deste repositório e mostrar tecnicas de melhorias de performance em aplicações React e NextJS.

## Começando

Instale as dependências

```bash
npm install
# ou
yarn
```

Rode um servidor fake (json-server) necessário para servir dados para nosso app:

```bash
npm run server
# ou
yarn server
```

O server ficará disponível em [http://localhost:3333/products](http://localhost:3333/products).

Rode o app

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o app.

## Fluxo normal de renderização de um component react

1. Criar uma nova versão do componente.
2. Comparar com a versão anterior.
3. Se houver diferenças, vai atualizar o que alterou.

## Técnicas usadas

### memo (ProductItem.tsx)

- memoization: usado para evitar a renderização do componente se não houver mudanças.
