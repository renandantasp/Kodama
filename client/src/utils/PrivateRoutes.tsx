import { ReactElement } from "react";
import { Outlet, Navigate } from "react-router-dom";



function PrivateRoutes(): ReactElement {
  let auth = {"token": false}

  return (auth.token ? <Outlet/> : <Navigate to="/login"/>)
}


export default PrivateRoutes