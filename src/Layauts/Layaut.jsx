import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layaut = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer/>
    </div>
  )
}

export default Layaut