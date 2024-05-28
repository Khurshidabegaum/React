
// import Findcoder from "./Component/Findcoder"
// const App=()=>
//   {
//     return(
//       <div>
//         <Findcoder/>
//       </div>
//     )
//   }
  // export default App

// *************project on crud*****************

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Crud from "./crud/Crud"
import Createuser from "./crud/Createuser"
import User from "./crud/User"
import Edituser from "./crud/Edituser"

  const App=()=>
    {
      return(
        <div>
           <BrowserRouter>   {/*it is component  from the react-router-dom this component wraps the entire application  */}
          <Crud/>
           <Routes>   {/*this component is used to wrap all the routes and it will  only render the first matching Route component   */}
            <Route element={<Createuser/>} path="/"/>
            <Route element={<User/>} path="/user"/>
            <Route element={<Edituser/>} path="/edit/:abc"/>
            
          </Routes>
          </BrowserRouter>

        </div>
      )
    }
    export default App