export function managePresents(state, action){
  if (action.type === "INCREASE") {
    let funky = state.numberOfPresents + 1
    return {numberOfPresents: funky}
  } else {
    return state
  }
}
