import useStorageState from "react-use-storage-state";
import jwtDecode from "jwt-decode";

export function useToken() {
  const [token, setToken] = useStorageState("token", "");
  return { token, setToken };
}

export type JWTPayload = {
  id: number;
  email: string;
};

export function useJWTPayload(): null | JWTPayload {
  const { token } = useToken();
  if (!token) return null;
  return jwtDecode(token);
}

export function useLogout() {
  const { setToken } = useToken();
  return function logout() {
    setToken("");
  };
}

function dispatch(key:string,value:any){
	localStorage.setItem(key,value)
	let event =new StorageEvent('')
	window.dispatchEvent(event)
}

export function logout() {
  dispatch('token', null)
}
