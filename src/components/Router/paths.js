  import { Home } from "../../pages/Home/home";
  import { Er_404 } from "../../pages/Er_404/er_404";
  import Page1 from "../../pages/Lesson1/lesson1";
  import Page2 from "../../pages/Lesson2/lesson2";
  import Page3 from "../../pages/Lesson3/lesson3";

export const  routes = 
 [
    { path: "/", name: "", element: <Home/>, icon: null },
    { path: "/home", name: "Főoldal", element: <Home/>, icon:""  }, 
    { path: "/lesson_1", name: "Lecke #1 :  Az alapok", element: <Page1/>, icon:""  }, 
    { path: "/lesson_2", name: "Lecke #2 : Bootstrap", element: <Page2/>, icon:""  }, 
    { path: "/lesson_3", name: "Lecke #3 : Router", element: <Page3/>, icon:""  }, 
    { path: "/*", name: "", element: <Er_404/>, icon: null },
 ];