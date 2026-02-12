// You don't need to use JSX if you don't want to, but using JSX code is more convenitent
function App(){
    return(
        <div id="content">
            <p>Hello world</p>
        </div>
    )
}

// Without JSX:
React.createElement(
  'div',
  {id: 'content' },
  React.createElement(
    'p',
    null,
    'Hello World'
  )
);
export default App;