import './App.css';

//function App() {
//  const fourthExample = () => console.log('fourth example');
//
//  return (
//    <div className="fourthExample">
//      <button onClick={fourthExample}>
//        using a separate function expression
//      </button>
//    </div>
//  );
//}
//
//export default App;

function App() {
      return( <button onClick={() => console.log('second example')}>
        An inkine anonymous ES6 function event handler
      </button>
    );
};

export default App;