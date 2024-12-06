

import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const{state}= useContextGlobal();
  
  return (
    <div className={state.theme ==='light'? 'light-theme' : 'dark-theme'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((odontologo)=>(
          <Card key={odontologo.id} odontologo={odontologo}/>
        ))}
        
        
      </div>
    </div>
  );
};

export default Favs;


