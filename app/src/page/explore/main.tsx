import React, { Suspense, useState } from 'react';
import { Menu, Tabs } from 'react-daisyui';
import useFetch from "react-fetch-hook";
import UniLoader from '../elements/loader';
import UserProfileComponent from '../elements/UserProfileComponent';


function Explore(){
    const [filter, setFilter] = useState(1);
    const [filter2, setFilter2] = useState(0);
    const UsertProfile = React.lazy(() :any => 
    {  return new Promise(resolve => {
      setTimeout(() => resolve(import("../elements/UserProfileComponent")), 500);
      clearTimeout();
    })});


    return(
        <div className="mx-auto max-w-screen-2xl">
        <div className="flex mx-7 py-3">
        <Tabs value={filter} className="cursor-default border-b border-[#b0b0b0] border-base-150 w-full h-[3rem] font-mono font-medium shadow-xl">
        <Tabs.Tab className={`${filter==1?"tab-active":""} tab p-3 text-lg`} value={()=>{setFilter(1)}}>Details</Tabs.Tab>
        <Tabs.Tab className={`${filter==2?"tab-active":""} tab p-3 text-lg`} value={()=>{setFilter(2)}}>Owners</Tabs.Tab>
        <Tabs.Tab className={`${filter==3?"tab-active":""} tab p-3 text-lg`} value={()=>{setFilter(3)}}>History</Tabs.Tab>
        </Tabs>
        </div>
        {/* className="hover-bordered" */}
        <div className="grid grid-col-7 gap-4 px-5">
            <div className="p-3 col-start-1 col-end-2 max-w-[20rem]">
            <ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
                <span className="p-3 text-md text-content-secondary font-mono font-medium">
                    Type
                </span>
                <li className={`${filter2==1?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(1)}}><a>{filter2}</a></li>
                <li className={`${filter2==2?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(2)}}><a>{filter2}</a></li>
                <li className={`${filter2==3?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(3)}}><a>{filter2}</a></li>
            </ul>

            <ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
                <span className="p-3 text-md text-content-secondary font-mono font-medium">
                    Social Verification
                </span>
                <li className={`${filter2==1?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(1)}}><a>{filter2}</a></li>
                <li className={`${filter2==2?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(2)}}><a>{filter2}</a></li>
                <li className={`${filter2==3?"border-b-2 bg-base-300":""}`} onClick={()=>{setFilter2(3)}}><a>{filter2}</a></li>
            </ul>
            </div>
           <div className="col-start-2 col-end-8">
           <div className="grid grid-cols-3 gap-4 p-5">
               <Suspense fallback={
                <div className="col-start-1 col-end-4 h-[100vh]">
                <UniLoader/>
                </div>
                }>
                    <UsertProfile/>
                </Suspense>
            </div>
           </div>
        </div>
        </div>
    )
}

export default Explore;