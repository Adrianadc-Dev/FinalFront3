/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {theme: "", odontologos: []}

const ContextGlobal = createContext();


const ContextProvider = ({ children }) => {
  const [favs, setFavs]= useState([]);
  const [odontologos, setOdontologos]= useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  
useEffect(()=>{
  axios(url).then((res)=>{
    
    console.log(res.data)
    setOdontologos(res.data)
    
    
  });
},[]);

  return (
    <ContextGlobal.Provider value={{favs, setFavs, odontologos}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;


// eslint-disable-next-line react-refresh/only-export-components
export const useContextGlobal = () => useContext(ContextGlobal);