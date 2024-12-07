
import "../styles/index.css"
const CardForm = ({nombre, email}) => {
  return (
    <div className="div">
        <h3>Gracias {nombre}! te contactaremos cuanto antes via email al correo: {email}</h3>
    </div>
  )
   
}

export default CardForm