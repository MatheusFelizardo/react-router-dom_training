import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import useFetch from "./custom_hooks/useFetch";
import ProdutoDetail from "./ProdutoDetail";

const Produtos = () => {
  const { request, data } = useFetch();

  React.useEffect(() => {
    async function consumeAPI() {
      await request("https://ranekapi.origamid.dev/json/api/produto");
    }
    consumeAPI();
  }, [request]);

  return (
    <section className="AllProductsCard">
      {data &&
        data.map((produto) => {
          return (
            <Link to={"/produto/" + produto.nome.toLowerCase()}>
              <div className="ProductCard" key={produto.id}>
                <h1>{produto.nome}</h1>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                <p>Preço: </p> <span>R$ {produto.preco}</span>
                <br />
                <p>Descrição: </p> <span>{produto.descricao}</span>
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Produtos;
