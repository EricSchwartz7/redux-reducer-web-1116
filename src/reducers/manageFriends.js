export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND"){
    state.friends.push(action.payload)
    return state
  } else if (action.type === "REMOVE_FRIEND"){
    let newFriends = []
    state.friends.forEach (function(friend){
      if (friend.id !== action.payload){
        newFriends.push(friend)
      }
    })
    Object.assign(state, {friends: newFriends})
    return state
  } else {
    return state
  }
}
