import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

const Home: NextPage = () => {
  const [search, setSearch] = useState("product 10");
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    console.log(data);

    setResults(data);
  }

  /**
   * Sempre que uma função for repassadas para os filhos
   * ela pode usar o useCallback
   * para que quando uma comparação referencial for realizada
   * não seja necessário recriar o componente,
   * visto que a função não mudou
   *
   */

  // Sem useCallback
  // async function addToWishList(id: number) {
  //   console.log(id);
  // }

  // Com useCallback
  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Busque um produto entre Product 1 a Product 1000</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="product ..."
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} onAddToWishList={addToWishList} />
    </div>
  );
};

export default Home;
