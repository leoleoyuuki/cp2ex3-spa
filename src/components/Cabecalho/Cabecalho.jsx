import { Link } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho(props) {

  return (
    <>
      <header className="cabecalho">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar Produtos</Link>
          </li>

        </ul>
      </header>
    </>
  );
}
