
import "../styles/index.css"
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  

  return (
    <main className={state.theme ==='light'? 'light-theme' : 'dark-theme'} >
      <h1>Bienvenido a Clinica Odontologica</h1>
      <div className='card-grid'>
       {state.odontologos.map((odontologo)=>{
          return <Card key={odontologo.id} odontologo={odontologo}/>
       })}
      </div>
    </main>
  )
}

export default Home