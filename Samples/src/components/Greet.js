import React from "react";
import App from "../App";

//function Greet(){
  //  return <h1> Hello Deepa</h1>
//}

//export const Greet = () => <h1> Hello React</h1>

//const Greet = () => <h1> Hello React</h1>

// const Greet = props => {
//   console.log(props)
// //  props.name = 'Deepa'
//   return (
//     <div>
//   <h1>
//      Hello {props.name} a.k.a {props.heroName} </h1>
//   {props.children}
//   </div>
//   )
// }

// const Greet = ({name,heroName}) => {
//   return(
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   )
// }

const Greet = props => {
  const {name,heroName} = props
  return(
         <div>
           <h1>
             Hello {name} a.k.a {heroName}
           </h1>
         </div>
       )
}

export default Greet