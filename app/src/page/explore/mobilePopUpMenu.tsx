import { AnyRecord } from 'dns';
import React, { useEffect, useState } from 'react';  
    
interface ListCategory  {
        id: number,
        name: string,
}



function MobilePopUpMenuComponent(porps :any){
    const [MobileMenu, setMobileMenu] = porps.MobileMenu;
    const [category, setCategory] = porps.category
    const [selected, setSelected] = porps.selected
    const [submitted, setSubmitted] = porps.submitted

      // real time checking
      useEffect( () => {
          console.log(selected);
          console.log(submitted)
      },[selected, submitted])
    
    function addremove(category_id : number){
        const id :number = category_id
        // const result : any = selected.find(no=> no == category_id);

        if(selected.indexOf(id) >= 0){
            //remove
            const resultArr = selected.filter( (v : any) => v !== id)
            setSelected(resultArr)
        }
        else{
            // add
            setSelected([...selected, id])
        }
    }

    function submit(){
        setMobileMenu(false);
        setSubmitted(true);
        porps.clickSubmit();
    }


    return(
        <div
        className={`${
          MobileMenu ? "flex scale-up-ver-bottom" : "hidden scale-up-ver-bottom"
        }

            mobile-menu z-[9999] fixed top-[20vh] left-0 h-[80vh] w-[100vw] bg-base-100 text-primary font-mono font-medium
            items-center justify-center rounded-3xl border-neutral-content border-[1px]
            `}
      >
        <div className="grid grid-cols-1 text-center divide-y divide-[#b0b0b0] divide-dotted w-full p-5">
          <div className="p-4 text-white ">
            <div className="flex justify-between">
              <div className="card-title">Category</div>
              <button
                onClick={() => {
                  setMobileMenu(false);
                }}
                className="btn btn-primary rounded-full"
              >
                X
              </button>
            </div>
          </div>
          <div className="p-2 text-white overflow-y-scroll h-[50vh]">
            {
    category.map((item : any)=> (
            
            <div className="mt-5 flex item-start">
              <input
                value={item.id}
                onClick={(e) => {
                    console.log('e.currentTarget.value ', e.currentTarget.value);
                    addremove(item.id)
                  }}
                type="checkbox"
                checked={selected.indexOf(item.id) >= 0}
                className="mx-3 checkbox checkbox-sm rounded-md"
              />
              <div>{item.name}</div>
            </div>

        ))}

          </div>

          <div>
            <button 
            className="mt-5 btn btn-primary w-[80vw] rounded-lg"
            onClick={()=>{
                submit()
            }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
}

export default MobilePopUpMenuComponent


{/* <div className="p-4 text-white ">
<span>Social Verification</span>
<div className="mt-5 flex item-start">
  <input
    type="checkbox"
    checked={false}
    className="mx-3 checkbox checkbox-sm rounded-md"
  />
  <div>Twitter</div>
</div>
<div className="mt-5 flex item-start">
  <input
    type="checkbox"
    checked={false}
    className="mx-3 checkbox checkbox-sm rounded-md"
  />
  <div>Instagram</div>
</div>
<div className="mt-5 flex item-start">
  <input
    type="checkbox"
    checked={false}
    className="mx-3 checkbox checkbox-sm rounded-md"
  />
  <div>Not Verified</div>
</div>
</div> 

            <div className="mt-5 flex item-start">
              <input
                value={1}
                type="checkbox"
                checked={false}
                className="mx-3 checkbox checkbox-sm rounded-md"
              />
              <div>Creator</div>
            </div>
            <div className="mt-5 flex item-start">
              <input
                value={2}
                type="checkbox"
                checked={false}
                className="mx-3 checkbox checkbox-sm rounded-md"
              />
              <div>Collector</div>
            </div>
            <div className="mt-5 flex item-start">
              <input
                value={3}
                onClick={(e) => {
                  console.log(e.currentTarget.value);
                }}
                type="checkbox"
                checked={false}
                className="mx-3 checkbox checkbox-sm rounded-md"
              />

            </div>



*/}