import React from "react";

import { Navigate, Route } from "react-router-dom";
/* "Navigate" instead of "Redirect" since from react-router-dom v6 */

function PrivateRoute(props: any) {
  const user = null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
