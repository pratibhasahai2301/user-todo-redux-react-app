import { todosRequested } from "./actions";

// Future Reference
/*
// This is a thunk which dispatches multiple actions from actions.js
const complexQuack = ( distance ) => ( dispatch ) => {
  dispatch( actions.quack( ) ).then( ( ) => {
    dispatch( actions.swim( distance ) );
    dispatch( /!* any action *!/ );
  } );
}
*/
export default {
  todosRequested,
};