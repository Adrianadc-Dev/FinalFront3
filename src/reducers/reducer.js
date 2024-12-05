export const reducer=(state, action)=>{
  switch(action.type){
    case "obtenerOdontologo":
      return{...state, odontologos: action.payload }
    case "addFavs":
      return{...state, favs: [...state.favs, action.payload]}
    case "changeTheme":
      return{...state, theme: action.payload}
    default:
      throw new Error("accion no existente")
  }
  }