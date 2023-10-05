import { useNavigate, useParams } from "react-router-dom";
import style from "./ExcluirProdutos.module.scss";
import { useEffect, useState } from "react";
// import style from "./EditarProdutos.module.scss";
export default function ExcluirProdutos() {
  document.title = "Excluir Produtos";

  const navigate = useNavigate();

  //Receber o ID do produto pelo HOOK useParams( );
  const { id } = useParams();


  const [listaProdutoExterno, setListaProdutoExterno] = useState([{}]);

  useEffect(() => { 
    fetch("http://localhost:5000/produtos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setListaProdutoExterno(data))
      .catch((error) => console.log(error));
    
  });

  //Recuperar o produto na lista pelo ID.
  const produto = listaProdutoExterno.filter((produto) => produto.id == id)[0];

  const handleDelete = (event) => {
    event.preventDefault();

    let indice;

    indice = listaProdutoExterno.findIndex((item) => item.id === produto.id);

    listaProdutoExterno.splice(indice, 1);

    alert("Produto exclído com sucesso!");

    navigate("/produtos");
  };
  return (
    <>
      <div>
        <h1>Excluir Produtos</h1>
        
        <div className={style.card}>
            <h2>Produto Selecionado</h2>
            <figure>
                <img src={produto.img} alt={produto.desc} title={produto.desc}/>
                <figcaption>{produto.nome} - <span>R$ </span>{produto.preco}</figcaption>
            </figure>
            <div className={style.btn}>
                <button onClick={handleDelete}>EXCLUIR</button>
                <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>
        </div>

      </div>
    </>
  );
}
