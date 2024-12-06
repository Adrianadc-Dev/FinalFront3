/* eslint-disable react/prop-types */
import { Link} from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import "../styles/index.css"

const Card = ({ odontologo }) => {
  const {name, username, id } = odontologo
 
  const {dispatch, state}= useContextGlobal();

  const findFav  = state.favs.find((fav)=> fav.id===odontologo.id);
  const toggleFav =()=>{
    dispatch ({type: findFav? "deleteFavs": "addFavs", payload: odontologo})
  }


  return (
    <div className="card">
       <Link to={`/detail/${id}`}>
        <img className= "imgCard" src={"/images/doctor.jpg"} alt={odontologo} />
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>
      <button onClick={toggleFav} className="favButton">{findFav ? "Delete": "Add fav"}</button>
      {/* {location.pathname=="/favs" ? (""): 
        
      } */}

        
    </div>
  );
};

export default Card;
