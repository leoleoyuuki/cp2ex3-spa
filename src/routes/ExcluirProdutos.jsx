import { useNavigate, useParams } from "react-router-dom";
import style from "./ExcluirProdutos.module.css";
import { useEffect, useState } from "react";

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
  const prod = produto[0]
  const img = prod.img
  const desc = prod.desc
  const preco = prod.preco
  const nome = prod.nome

  const handleDelete = (event) => {
    event.preventDefault();

    let indice;

    indice = listaProdutoExterno.findIndex((item) => item.id === produto.id);

    listaProdutoExterno.splice(indice, 1);

    fetch("http://localhost:5000/produtos",{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(listaProdutoExterno)
      })
      .then((response)=> response.json())
      .then((response)=> console.log(response))
      .catch(error=> console.log(error));

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
                <img src={img} alt={desc} title={desc}/>
                <figcaption>{nome} - <span>R$ </span>{preco}</figcaption>
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
