/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";
import { reducer } from "../../reducers/reducer";

// eslint-disable-next-line react-refresh/only-export-components


const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("...state.favs"))|| [];

const initialState = {
  favs:(lsFavs),
  odontologos:[],
  theme:'light'

}

const ContextProvider = ({ children }) => {
  const [state, dispatch]= useReducer(reducer, initialState);
  // const [favs, setFavs]= useState((lsFavs)) ;
  // const [odontologos, setOdontologos]= useState([]);
  // const [theme, setTheme]=useState("")
  const url = "https://jsonplaceholder.typicode.com/users";
  console.log(state.theme)
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(...state.favs))

  },[...state.favs])

useEffect(()=>{
  axios(url).then((res)=>{
  
    console.log(res.data)
    dispatch({type:"obtenerOdontologo", payload: res.data})
    // setOdontologos(res.data)
    
  });
},[]);


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;


// eslint-disable-next-line react-refresh/only-export-components
export const useContextGlobal = () => useContext(ContextGlobal);