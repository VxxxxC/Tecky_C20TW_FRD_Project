import React, { useState, useEffect } from "react";
import UseToken from "./UseToken";

function useUser() {
  const [token] = UseToken();

  function getPayloadFromToken(token: string) {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(atob(encodedPayload)); /* use "jwtSimple" can instead of using "atob" or "btoa" */
  }

  const [user, setUser] = useState(() => {
    if (!token) {
      console.log("no jwt token!")
      return null;
    } else {
      console.log("jwt token found!")
      return getPayloadFromToken(token);
    }
  });

  useEffect(() => {
    if (!token) {
      console.log("NO JWT TOKEN!")
      setUser(null);
    } else {
      console.log("JWT TOKEN FOUND!")
      setUser(getPayloadFromToken(token));
    }
  });

  return user;
}

export default useUser;
