import React from "react";

import { Navigate, Route } from "react-router-dom";
import useUser from "./useUser";
/* "Navigate" instead of "Redirect" since from react-router-dom v6 */

function PrivateRoute(props: any) {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
