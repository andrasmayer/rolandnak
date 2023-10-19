const Page3 = () =>{

    return (
      <div>
        <h1>Router Létrehozása</h1>
        <div>Telepítsd a react-router-dom library-t, ha nincs benne a csomagban.</div>
        <div>Hozz létre egy "components" nevű mappát a gyökérben</div>
        <div>Hozz létre egy "Router" nevű mappát a  "components"-ben, ebben pedig egy "router.js" és egy "path.js" nevű file-t.</div>
        <div>A "path.js" tartalmazza a meglátogatható oldalakat.</div>
<h4 className="mt-4">path.js</h4>
<pre>{`
  import { Home } from "../../pages/Home/home";
  import { Er_404 } from "../../pages/Er_404/er_404";
  import Page1 from "../../pages/page1/page1";
  import Page2 from "../../pages/page2/page2";

export const  routes = 
 [
    { path: "/", name: "", element: <Home/>, icon: null },
    { path: "/home", name: "Főoldal", element: <Home/>, icon:""  }, 
    { path: "/page1", name: "Lecke #1 :  Az alapok", element: <Page1/>, icon:""  }, 
    { path: "/page2", name: "Lecke #2 : Bootstrap", element: <Page2/>, icon:""  }, 
    { path: "/*", name: "", element: <Er_404/>, icon: null },
 ];
`}</pre>


<h4 className="mt-4">router.js</h4>
<pre>{`
import { Route, Routes } from "react-router-dom";
import  {routes}  from "./paths";

export const Router = () => {
  return (
    <div>
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

`}</pre>

        <div>A "routes.js"-t hívd meg az "App.js"-ben</div>
        <div>Az URL sávban a localhost:3000 után megadhatod a home,a page1 és page2-t mint elérési utakat.</div>
        <div>Az oldal egyenlőre hibát fog dobni.</div>
        <div>A sikerhez létre kell hoznod a gyökérben egy "pages" mappát, amiben létrehozol további három mappát a route-ok nevével (.js)</div>
        <div>A fileok neve ugyanaz legyen, mint a mappáé.</div>
       
        <h4 className="mt-4">home.js</h4>        
        <pre>{`export const Home = () => {
  return <div>Home page</div>;
};`}</pre> 
        <div>Ugyanezzen a hódon létrehozod a másik 3 file-t is. A függvénye neve ebben a példában lényegtelen.</div>
        <div>Ezután az App.js-ben meghívod a react-router-dom-ot, és a router.js-t, végül létrehozol egy navigációs menüt.</div>
        <h4 className="mt-4">App.js</h4>        
        <pre>{`
 import { BrowserRouter,Link } from "react-router-dom";
 import { Router } from "./components/Router/router";
 
 function App() {
   return( 
     <BrowserRouter>
        <ul>
            {props.routes.map((route, index) =>  
                route.icon != null && (
                    <li as={Link} to="/123" key={index}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                )
            )}
        </ul>
       <Router />
     </BrowserRouter>
   )
 }
 
 export default App;
        
        
        `}</pre>                
        <div>A műved immár használatra kész.</div>
      </div>
    );
  }
  
  export default Page3;