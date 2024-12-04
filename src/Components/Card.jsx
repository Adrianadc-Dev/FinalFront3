/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { useContextGlobal } from "./utils/global.context";

const Card = ({ odontologo }) => {
  const {name, username, id } = odontologo
  // const {setFavs} = useContextGlobal();
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
       <Link to={`/detail/${id}`}>
        {/* <img src={image} alt={odontologo} /> */}
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
