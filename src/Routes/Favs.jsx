

import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const{state}= useContextGlobal();
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((odontologo)=>(
          <Card key={odontologo.id} odontologo={odontologo}/>
        ))}
        
        
      </div>
    </>
  );
};

export default Favs;


