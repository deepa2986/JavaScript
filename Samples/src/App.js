import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import MyGreet from './components/Greet.js'
//import { Greet } from './components/Greet.js'
 import  Greet  from './components/Greet.js'
 import Welcome from './components/Welcome';
 import Hello from './components/Hello';
 import Message from './components/Message';
import Counter from './components/Counter';
import FuctionClick from './components/FuctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


// function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//   </header>
//   <Greet></Greet> or <Greet /> 
//   <MyGreet/>*/}
  
//   <Greet />
//   <Greet />
//   <Greet />


//   {/* <Welcome />
//   <Hello /> */}
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <FuctionClick />
        <ClassClick /> */}
        <EventBind />
        {/* <Greet name = 'Bruce'  heroName = 'Batman'/>
        <Welcome name = 'Bruce' heroName = 'Batman'/> */}
          {/* <p>
            This is children props
          </p>
        </Greet>

        <Greet name = 'Clark' heroName = 'Superman'/>
        <button>Action</button>
        <Greet name = 'Diana' heroName = 'Wonder woman' />
        <Welcome name = 'Bruce' heroName = 'Batman'/>
        <Welcome name = 'Clark' heroName = 'Superman'/>
        <Welcome name = 'Diana' heroName = 'Wonder woman'/>  */}

      </div>
    );
  }
}

export default App;
