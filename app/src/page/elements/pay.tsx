import React, { useEffect } from 'react';
import { useJWTPayload } from '../../hook/useToken';
import axios from "axios";



function PurchaseButton(){
    const localStore: any = useJWTPayload();
    const userId: number = localStore?.userId;    
    const itemId: number = 1099

    // let host = process.env.REACT_APP_URL; // fetch S3 server itself
    let host = `http://localhost:8080`

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



// var Component = React.createClass({
//     render: function(){
//             return (
//                 <form>
//                     <input type="text" ref="data" placeholder="Send some data"/>
//                     <button onClick={this.handleSubmit}>Send</button>
//                 </form>
//             );
//         },

//      handleSubmit: function(e) {
//             e.preventDefault();
//             var data = this.refs.data.getDOMNode().value;
//             fetch("<url to where to post>", {
//                 method: "POST",
//                 body: 'data'
//             }).then(this.handleRedirect)                    
//         },

//     handleRedirect: function(res){
//         if( res.status === 200 ){
//             // redirect here
//             // window.location.href = 'http://localhost:300/redirect';
//         }else {
//           // Something went wrong here
//         }

//     }
// });
