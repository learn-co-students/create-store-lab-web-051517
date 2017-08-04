export default function manageUsers( state = {users: [ { username: '', hometown: '' } ] }, action){
    switch (action.type) {
    case 'ADD_USER':
    console.log( state)
    return {users: [...state.users, action.user]}

  default:
    return state

    }
}
