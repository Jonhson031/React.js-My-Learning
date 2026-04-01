// ? How Redux works?
// It's an alternative for React Context API, but it used for bigger apps, where state managment is more complex.

// * 1) Redux has only one Central Data (state) store. 
// One file containing states for entire app.

// * 2) Components get data from store through subscriptions. 
// ! Components NEVER directly manipulate store data!

// * 3) Reducer function (general concept, NOT useReducer() ).
// Mutates (changes) data in Store 

// * 4) Action (dispatch)
// Is a simple JS object that describes the kind of operation the reducer should perform
// Components can trigger certain actions
// Therefore Redux forwards actions to the reducer, reads that description of the desire operation. And then this operation is perform by the Reducer


// ? Installing Redux:
// 1) npm i redux
// 2) npm i redux react-redux - to connect react with redux 