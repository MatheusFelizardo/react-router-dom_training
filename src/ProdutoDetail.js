import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./custom_hooks/useFetch";

const ProdutoDetail = () => {
  let { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  id = id.replace("â", "a");

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
    <>
      {produto.fotos.map((foto) => {
        return <img src={foto.src} alt="" />;
      })}

      <h2>{produto.nome}</h2>

      <h2>R${produto.preco}</h2>
      <h2>{produto.descricao}</h2>
    </>
  );
};

export default ProdutoDetail;
