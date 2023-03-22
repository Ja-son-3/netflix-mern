import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { createBrowserRouter, createRoutesFromElements, Link, Route, Outlet, RouterProvider} from 'react-router-dom'
// import { useContext } from "react";

function App() {
  const user = true
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={user ? <Home /> : <Register />} />
        <Route path="/movies" element={ user ? <Home type="movies" /> : <Register />} />
        <Route path="/series" element={ user ? <Home type="series" /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/watch" element={user ? <Watch /> : <Register />} />
      </Route>
    )
  )



  return (
    <>
      <RouterProvider  router={router}/>  
    </>
  );
}

const Root = () => {

  return (
    <> 
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
