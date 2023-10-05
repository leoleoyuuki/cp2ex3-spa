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
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setListaProdutoExterno(data))
      .catch((error) => console.log(error));
    
  });


  // Recuperar o produto na lista pelo ID.
  const produto = listaProdutoExterno.filter((produto) => produto.id == id);
  const prod = produto[0];
  

  const handleDelete = (event) => {
    event.preventDefault();

    let indice;
    indice = listaProdutoExterno.findIndex((item) => item.id === produto.id);

    listaProdutoExterno.splice(indice, 1);
    fetch(`http://localhost:5000/produtos/${prod.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
        
    })
    .then (fetch('http://localhost:5000/produtos', )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      }));
    

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
                <img src={prod.img} alt={prod.desc} title={prod.desc}/>
                <figcaption>{prod.nome} - <span>R$ </span>{prod.preco}</figcaption>
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
