import React, { useState } from "react";

function UseToken(): any {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });
  function setToken(newToken: string) {
    localStorage.setItem("token", newToken);
    localStorage.setItem("is_login", "true");
    setTokenInternal(newToken);
  }
  return [token, setToken];
}

export default UseToken;
