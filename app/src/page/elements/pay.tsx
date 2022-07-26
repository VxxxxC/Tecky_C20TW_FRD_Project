import React, { useEffect } from 'react';
import { useJWTPayload } from '../../hook/useToken';
import axios from "axios";



function PurchaseButton(){
    const localStore: any = useJWTPayload();
    const userId: number = localStore?.userId;    
    const itemId: number = 1099

    // let host = process.env.REACT_APP_URL; // fetch S3 server itself
    let host = process.env.REACT_APP_DEV_API

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(localStore)
        console.log(`${host}/create-checkout-session/${userId}/${itemId}`)

        const response = await axios.post(
            `${host}/create-checkout-session/${userId}/${itemId}`
          );

        console.log(response.data)

        if(response.data && response.data.status){
        window.location.href = response.data.url;   
        }
    }
    
    return (
        <div className="col-start-5 col-end-6 hover:scale-105 transition-all">
        <button 
        onClick={(e) =>handleSubmit(e)}
        className="btn btn-primary rounded-lg">Purchase</button>
         </div>
    );
}


export default PurchaseButton