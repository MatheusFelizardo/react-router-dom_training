import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./custom_hooks/useFetch";

const ProdutoDetail = () => {
  let { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    async function consumeAPI() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`,
        );
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    consumeAPI();
  }, [id]);

  console.log(produto);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error.message}</div>;
  if (produto === null) return null;

  return (
    <section className="ProdutoDetail">
      <div className="ProdutoDetail_Fotos">
        {produto.fotos.map((foto) => {
          return <img src={foto.src} alt="" />;
        })}
      </div>
      <div className="ProdutoDetail_Text">
        <h2>{produto.nome}</h2>

        <span>Valor: R${produto.preco}</span>
        <p>Descrição do Produto:</p>
        <span>{produto.descricao}</span>
      </div>
    </section>
  );
};

export default ProdutoDetail;
