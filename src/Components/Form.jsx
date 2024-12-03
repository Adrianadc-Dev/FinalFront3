import { useState } from "react";
import CardForm from "./CardForm";
import "../styles/index.css"

const Form = () => {
  const [usuario, setUsuario]= useState({
      nombre: "",
      email: ""
  })
  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);
  const handleSubmi =(event)=>{
      const regexEmail= new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')
      event.preventDefault();
      if(usuario.nombre.trim().length>=5 && regexEmail.test(usuario.email)){
          setMostrar(true);
          setErr(false);
      }else{
          setErr(true);
      }

  }
  console.log(usuario);
return (
  <>
    <form className= "form" onSubmit={handleSubmi}>
      <label>Escribe tu nombre completo</label>
      <input
        type="text"
        value={usuario.nombre}
        onChange={(event) =>
          setUsuario({ ...usuario, nombre: event.target.value })
        }
      />
  
      <label>Email</label>
      <input
        type="text"
        value={usuario.email}
        onChange={(event) =>
          setUsuario({ ...usuario, email: event.target.value })
        }
      />
      <button className="button_enviar">Enviar</button>
      {err ? (
        <h4 style={{ color: "red" }}>Por favor verifique su informacion nuevamente</h4>
      ) : null}
    </form>
    <div>
    {mostrar ? (
      <CardForm nombre={usuario.nombre} email={usuario.email}/>
    ) : null }
    </div>
  </>
);
}

export default Form