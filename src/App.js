import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router/router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return( 
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;
