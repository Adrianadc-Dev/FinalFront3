/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import "../styles/index.css"

const Card = ({ odontologo }) => {
  const {name, username, id } = odontologo
 
  const {dispatch}= useContextGlobal();
  const addFav = ()=>{
    dispatch({
      type:"addFavs", 
      
      payload:{...odontologo, odontologo}})
    // setFavs((favs)=>[...favs , odontologo] )
  }
  const location = useLocation();

  return (
    <div className="card">
       <Link to={`/detail/${id}`}>
        <img className= "imgCard" src={"/public/images/doctor.jpg"} alt={odontologo} />
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>
      {location.pathname=="/favs" ? (""): 
        <button onClick={addFav} className="favButton">Add fav</button>
      }

        
    </div>
  );
};

export default Card;
