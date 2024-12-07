
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const{state}= useContextGlobal();
  const [odontologo, setOdontologo]=useState({});
  const params = useParams()
  console.log(params)
  const url ="https://jsonplaceholder.typicode.com/users/"+params.id;

  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res.data)
      setOdontologo(res.data)
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className={state.theme ==='light'? 'light-theme' : 'dark-theme'}>
      <h1>Detail Dentist id </h1>
      <h2>Nombre: {odontologo.name}</h2>
      <h3>Email: {odontologo.email}</h3>
      <h3>Telefono: {odontologo.phone}</h3>
      <h3>Website: {odontologo.website}</h3>
  
    </div>
  )
}

export default Detail