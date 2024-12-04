
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
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
  

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{odontologo.name}</h2>
      <h3>{odontologo.email}</h3>
      <h3>{odontologo.phone}</h3>
      <h3>{odontologo.website}</h3>
  
    </>
  )
}

export default Detail