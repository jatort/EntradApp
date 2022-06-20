const initialState = {
    authToken: null,
    email: null,
    role: null,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          ...state, //copy all previous states
          authToken: action.payload,
          email: action.email,
          role: action.role,
        }
      case 'LOGOUT':
        return {
          authToken: null,
        }
      default:
        return state;
    }
  }