import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';


export default function App(){


  return(
    <>
      <Cabecalho/>
        <Outlet/>
      <Rodape />
      
    </>
  );

}