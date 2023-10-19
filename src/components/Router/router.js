import { Route, Routes } from "react-router-dom";

import  {routes}  from "./paths";
import  {Navbar}  from "../Navbar/navbar";
import  {Navbar_bs}  from "../Navbar/navbar_bs";

export const Router = () => {
  return (
    <div className="container-fluid border ">
     
     { /* <Navbar routes={routes}/> */}
      
      { /* <Navbar_bs routes={routes}/> */}
      <Navbar_bs routes={routes}/>
        <div className="col-md-10 col-12  p-5 m-0 d-flex justify-content-center">
          <Routes>

            {routes.map((item, key) => (
              <Route key={key} exact path={item.path} element={item.element} />
            ))}
          </Routes>
        
      </div>
    </div>
  );
 
};
