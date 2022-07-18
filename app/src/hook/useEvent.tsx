import { useState } from 'react'
import useEvent from 'react-use-event'
import { Value } from 'sass'

export type MenuOpenEvent = {
  type: 'open'
  value: true
}
export type MenuCloseEvent = {
  type: 'close'
  value: false
}

export function MenuSwitch(){
    const [menu, setMenu] = useState(false)
    useEvent<MenuOpenEvent>('open', (e) => setMenu(e.value))
    useEvent<MenuCloseEvent>('close', (e) => setMenu(e.value))

    function Open(){
        useEvent<MenuOpenEvent>('open')
    }

    function Close(){
        useEvent<MenuCloseEvent>('close')
    }
    console.log(menu)
    return(
        <>

            <button className='mx-5 btn' onClick={()=>{setMenu(true)}}>Open</button>
            <button className='mx-5 btn' onClick={()=>{setMenu(false)}}>Close</button>
           <div>
               value: {menu?1:2}
            </div> 
        </>
    )
}

// export function LoginPage() {
//   const dispatch = useEvent<LoginEvent>('login')
//   function login() {
//     // fetch ...
//     dispatch({ token: '123' })
//   }
//   return (
//     <div>
//       <button onClick={login}>login</button>
//     </div>
//   )
// }

// export function TopBar() {
//   const [hasLogin, setHasLogin] = useState(false)
//   useEvent<LoginEvent>('login', () => setHasLogin(true))
//   useEvent<LogoutEvent>('logout', () => setHasLogin(false))
//   return (
//     <div>{hasLogin ? <button>Logout</button> : <button>Login</button>}</div>
//   )
// }
