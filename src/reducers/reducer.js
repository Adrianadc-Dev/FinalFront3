export const reducer=(state, action)=>{
  switch(action.type){
    case "obtenerOdontologo":
      return{...state, odontologos: action.payload }
    case "addFavs":
      return{...state, favs: [...state.favs, action.payload]}
    case "changeTheme":
      return{...state, theme: action.payload}
    case "deleteFavs":
      // eslint-disable-next-line no-case-declarations
      const filterFavs = state.favs.filter((fav)=> fav.id !== action.payload.id)
      return {...state, favs: filterFavs}
    default:
      throw new Error("accion no existente")
  }
  }