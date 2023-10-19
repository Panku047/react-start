import React from 'react'
import ReactDOM from 'react-dom/client';
import Layout from './src/components/layout/index'

//React Element
// const heading = (
//     <h1>
//         my name is pankaj
//     </h1>
// );

//React Functional Component
// const HeadComponent = () =>{
//     return(
//         <div>
//             This is my react functional component
//         </div>
//     );
// }

const root  = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Layout />);