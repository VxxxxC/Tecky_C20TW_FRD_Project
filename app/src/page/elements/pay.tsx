import React, { useEffect } from 'react';
import { useJWTPayload } from '../../hook/useToken';
import axios from "axios";

import ReactRouter, { useNavigate } from 'react-router'

function PurchaseButton(props: any){
    const localStore: any = useJWTPayload();
    const userId: number = localStore?.userId || localStore?.id[0].id;   
    const itemId = props.id
    const navigate = useNavigate();
    
    // let host = process.env.REACT_APP_URL; // fetch S3 server itself
    let host = process.env.REACT_APP_DEV_API

    const handleSubmit = async (e: any) => {
        if(userId){
            e.preventDefault();
            console.log(localStore)
            console.log(`${host}/create-checkout-session/${userId}/${itemId}`)

            const response = await axios.post(
                `${host}/create-checkout-session/${userId}/${itemId}`
            );

            console.log(response.data)

            if(response.data && response.data.status){
                navigate(response.data.url)
            }
        }else{
            // window.location.href = "/login";   
            // navigate(-1)
            navigate('/login')
        }
    }
    
    return (
        <div className="col-start-5 col-end-6 hover:scale-105 transition-all">
        <button 
        onClick={(e) =>handleSubmit(e)}
        className="btn btn-primary rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>    
        Buy</button>
         </div>
    );
}


export default PurchaseButton