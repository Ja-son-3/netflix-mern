import "./app.css"
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'

import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Root />}>

        <Route path="/login" element={<Login />} />
      </Route>
      </>
    )
  )

  return (
    <RouterProvider  router={router}/>   
  );
}

const Root = () => {

  return (
    <> 
        <Outlet />
    </>
  )
}

export default App;
