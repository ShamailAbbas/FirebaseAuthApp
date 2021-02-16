const initialstate = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
}
const reducer = (state = initialstate, action) => {
  if (action.type === 'SIGNUP') {
    localStorage.setItem('name', action.payload.name)
    localStorage.setItem('email', action.payload.email)
    localStorage.setItem('password', action.payload.password)
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    }
  }
  return state
}
export default reducer
