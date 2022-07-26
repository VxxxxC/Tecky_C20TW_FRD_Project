import React, { useEffect } from 'react';


function PurchaseButton(){
    useEffect(() => {
    })

    const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     var data = this.refs.data.getDOMNode().value;
    //     fetch("<url to where to post>", {
    //         method: "POST",
    //         body: 'data'
    //     }).then(res => res.json())
    //     .then((res)=>{
    //         handleRedirect(res)
    //     })                    
    // },
    }

    function handleRedirect(res : Response){
        if( res.status === 200 ){
            let result = res.json()
            console.log(result)
            // redirect here
            // window.location.href = 'http://localhost:300/redirect';
        }else {
          // Something went wrong here
        }

    }
    return (
        // <form>
        //     <input type="text" ref="data" placeholder="Send some data"/>
        //     <button onClick={(e) =>handleSubmit(e)}>Send</button>
        // </form>
        <div className="col-start-5 col-end-6">
        <button 
        onClick={(e) =>handleSubmit(e)}
        className="btn btn-primary rounded-lg">like</button>
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
