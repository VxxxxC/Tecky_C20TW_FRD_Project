import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import  { Modal, Button } from 'react-daisyui';
import { useJWTPayload } from '../../hook/useToken';
import BackgroundAnimation2 from '../elements/background_2';
import PurchaseButton from '../elements/pay';

function SuccessPayment(){
    const { hash } = useParams()
    const host = `http://localhost:8080`

    useEffect( () => {
        fetch(`${host}/paid/${hash}`)
        .then(response => response.json())
        .then(() => {
            window.setTimeout(function() {
            window.location.href = '/';
            }, 3000);
        });

    }, [])

    
    // const localStore: any = useJWTPayload();
    // const userId: number = localStore?.id;


    // // const user_jwtToken = useStorageState("token", "");
    // useEffect(() => {
    //     console.log(localStore);


    //     // window.setTimeout(function() {
    //     //     window.location.href = '/';
    //     // }, 3000);
    // })

    const [visible, setVisible] = useState<boolean>(false)

    const toggleVisible = () => {
      setVisible(!visible)
    }

    let successText = (         <div className="alert alert-success shadow-lg animate-bounce w-96">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
    </div>
    </div>)
  
    return (
        
    <div className="font-mono h-[60vh] flex items-center justify-center">
        <BackgroundAnimation2 text={successText}/>
        <PurchaseButton/>
    </div>
      
    )
    // useNavigate

    // window.setTimeout(function() {
    //     window.location.href = '/';
    // }, 5000);

    
}

export default SuccessPayment

function useStorageState(arg0: string, arg1: string) {
    throw new Error('Function not implemented.');
}
