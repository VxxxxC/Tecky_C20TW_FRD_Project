import React, { useState, useEffect } from "react";
import useToken from "./useToken";

function useUser() {
  const [token] = useToken();

  function getPayloadFromToken(token: string) {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(atob(encodedPayload)); /* use "jwtSimple" can instead of using "atob" or "btoa" */
  }

  const [user, setUser] = useState(() => {
    if (!token) {
      return null;
    } else {
      return getPayloadFromToken(token);
    }
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getPayloadFromToken(token));
    }
  });

  return user;
}

export default useUser;
