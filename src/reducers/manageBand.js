export default function manageUsers(state={users:[]}, action){
  switch(action.type){
    case 'ADD_USER':
      state ={
        users:[...state.users, action.user]
      }
      return state;
    default:
    return state;
  }
}
