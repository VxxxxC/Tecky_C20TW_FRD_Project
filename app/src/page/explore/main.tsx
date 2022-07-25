import React, { Suspense, SyntheticEvent, useEffect, useState } from "react";
import { Menu, Tabs } from "react-daisyui";
import useFetch from "react-fetch-hook";
import useWindowDimensions from "../../hook/useWindowDimensions";
import UniLoader from "../elements/loader";
import ProductItemProps from "../elements/productItem_props";
import UserProfileComponent from "../elements/UserProfileComponent";
import UserProfileComponent_test from "../elements/UserProfileComponent_test";
// import UserProfileComponentTest from "../elements/UserProfileComponent_test";
import "./main.scss";
import MobilePopUpMenuComponent from "./mobilePopUpMenu";

// let items = [
//   {
//     bg: "string",
//     icon: "string",
//     name: "string",
//     username: "string",
//     bio: "string",
//   },
//   {
//     bg: "string",
//     icon: "string",
//     name: "string",
//     username: "string",
//     bio: "string",
//   },
// ];


interface ListCategory  {
  id: number,
  name: string,
}

interface ListItem	{
  name: string,
  image: string,
  price: number,
  category_id: number,
  nft_address: string,
}

function Explore() {
  const { height, width } = useWindowDimensions();
  const [filter, setFilter] = useState(1);
  const [filter2, setFilter2] = useState(0);
  const [MobileMenu, setMobileMenu] = useState(false);
  const [filterTest, setfilterTest] = useState([]);
  const [users, serUsers] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<any>(null);
  const [category, setCategory] = useState<ListCategory[]>([])
  const [selected, setSelected] = useState<number[]>([])
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [items, setItems] = useState<ListItem[]>()
  const [displayed, setDisplayed] = useState<ListItem[]>()


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

  // let host = `http://localhost:8080`
  let host = `https://unipiece-api.full-stack.app`


  useEffect(() => {
    fetch("https://unipiece-api.full-stack.app/getalluser")
      fetch(`${host}/getalluser`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          serUsers(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("what happened: ", error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
      // fetch("https://unipiece-api.full-stack.app/getcategorylist")
        fetch(`${host}/getcategorylist`)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            setCategory(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log("what happened: ", error);
          }
        );
    }, []);

    useEffect(() => {
        fetch("https://unipiece-api.full-stack.app/getallitems")
          fetch(`${host}/getallitems`)
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              setItems(result);
              setDisplayed(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log("what happened: ", error);
            }
          );
      }, []);
      
      useEffect(() => {
        console.log(selected)
      }, [selected])
  

  function clickSubmit(){
    console.log("hiiii");

    const finalArr = items ? items.filter( v => selected.indexOf(v.category_id) >= 0) : []
    setDisplayed(finalArr)
  }

  const UserProfileComponentTest = React.lazy(() :any => import ("../elements/UserProfileComponent_test"));

  const UserProfileComponentTest2 = React.lazy((): any => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("../elements/UserProfileComponent_test")),
        500
      );
      clearTimeout();
    });
  });

  // const filteredUsers = users.filter(user => user.style==2)


  const listUsers = users.map((item) => (
    <Suspense
                fallback={
                  <div className="col-start-1 col-end-4 h-[100vh]">
                    <UniLoader />
                  </div>
                }
              >
    <UserProfileComponentTest
      bg={item.bg}
      icon={item.icon}
      name={item.name}
      username={item.username}
      bio={item.bio}
    />
    </Suspense>
  ));




  // const listItemsLazy = React.lazy(() :any => import ("../elements/UserProfileComponent_test"));
  const UsertProfile = React.lazy((): any => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("../elements/UserProfileComponent")),
        500
      );
      clearTimeout();
    });
  });

  return width > 600 ? (
    // Desktop Version //
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex mx-7 py-3 ">
        <Tabs
          value={filter}
          className="cursor-default border-b-[1px] border-[#b0b0b0] w-full h-[3rem] font-mono font-medium shadow-xl"
        >
          <Tabs.Tab
            className={`${filter == 1 ? "tab-active " : ""} tab text-lg`}
            value={() => {
              setFilter(1);
            }}
          >
            Peices
          </Tabs.Tab>
          <Tabs.Tab
            className={`${filter == 2 ? "tab-active" : ""} tab text-lg`}
            value={() => {
              setFilter(2);
            }}
          >
            Collection
          </Tabs.Tab>
          <Tabs.Tab
            className={`${filter == 3 ? "tab-active" : ""} tab text-lg`}
            value={() => {
              setFilter(3);
            }}
          >
            Profiles
          </Tabs.Tab>
        </Tabs>
      </div>

    {/* *************** Grid *********************** */}
    <div className="grid grid-col-7 ">
          {/* *************** filter *********************** */}
          <div className={`${filter >=3?"hidden":""}        
          col-start-1 col-end-2 font-mono shadow-lg p-5`}>
          {
          category.map((item : any)=> (
            
            <div className="mt-5 flex item-start">
              <input
                value={item.id}
                onClick={(e) => {
                    console.log('e.currentTarget.value ', e.currentTarget.value);
                    addremove(item.id)
                    clickSubmit()
                  }}
                type="checkbox"
                checked={selected.indexOf(item.id) >= 0}
                className="mx-3 checkbox checkbox-sm rounded-md"
              />
              <div>{item.name}</div>
            </div>

        ))}
          </div>

          {/* *************** UserProfile *********************** */}
        <div className="col-start-2 col-end-8">
          <div className="grid grid-cols-3 gap-x-4 p-2">
            {filter == 1 ? (
              displayed ? displayed.map(item => (
                <div>
                  <ProductItemProps 
                    name={item.name}
                    img={item.image}
                    price={item.price}
                    nft_address={item.nft_address}
                  />
                </div>
              )):
              <div className="col-start-1 col-end-8 h-screen">
              <UniLoader />
            </div>
            ) : (
              ""
            )}
            {filter == 2 ? (
              <Suspense
                fallback={
                  <div className="col-start-1 col-end-4 h-[100vh]">
                    <UniLoader />
                  </div>
                }
              >
                2
              </Suspense>
            ) : (
              ""
            )}
            {filter == 3 ? (
              <>
              {listUsers}
              </>
            ) : (
              ""
            )}
          </div>
        </div>   
      </div>

    </div>
  ) : (
    // Mobile Version //
    <div>
      <div className="flex py-3">
        {/* Top Tab */}
        <Tabs
          value={filter}
          className="cursor-default border-b-[1px] border-[#b0b0b0] w-full h-[3rem] font-mono font-medium shadow-xl"
        >
          <Tabs.Tab
            className={`${filter == 1 ? "tab-active " : ""} tab text-lg`}
            value={() => {
              setFilter(1);
            }}
          >
            Peices
          </Tabs.Tab>
          <Tabs.Tab
            className={`${filter == 2 ? "tab-active" : ""} tab text-lg`}
            value={() => {
              setFilter(2);
            }}
          >
            Collection
          </Tabs.Tab>
          <Tabs.Tab
            className={`${filter == 3 ? "tab-active" : ""} tab text-lg `}
            value={() => {
              setFilter(3);
            }}
          >
            Profiles
          </Tabs.Tab>
        </Tabs>

        {/* filter button */}
        <button
          onClick={() => {
            setMobileMenu(true);
            setSubmitted(false);
          }}
          className={
        `${filter<=2?"":"hidden"} btn-primary font-mono font-medium fixed rounded-full -translate-x-[50%] left-[50%] bottom-[8vh] w-[9rem] h-[3rem]
        hover:scale-105 transition ease-in-out z-50`
        }
        >
          Filters
        </button>

        {/* Brower */}
      </div>
      {filter == 1?
            <div className="min-h-[100vh]">
            <div className="m-5 p-5 flex flex-col">
              {
                              displayed ? displayed.map(item => (
                                <div>
                                  <ProductItemProps 
                                    name={item.name}
                                    img={item.image}
                                    price={item.price}
                                    nft_address={item.nft_address}
                                  />
                                </div>
                              )):<UniLoader />
              }
            </div>
          </div>
      :""}
      {filter == 2?
            <div className="min-h-[100vh]">
            <div className="m-5 p-5 flex flex-col">
            </div>
          </div>
      :""}
      {filter == 3?
            <div className="min-h-[100vh]">
            <div className="m-5 p-5 flex flex-col">
              {listUsers}
            </div>
          </div>
      :""}

      {/* pop-up menu */}
      <MobilePopUpMenuComponent 
        selected={[selected, setSelected]}
        category={[category, setCategory]}
        submitted={[submitted, setSubmitted]} 
        MobileMenu={[MobileMenu, setMobileMenu]}
        clickSubmit={clickSubmit}
      />
    </div>
  );
}

export default Explore;




{/* <div className="p-3 col-start-1 col-end-2 max-w-[20rem]">
<ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
  <span className="p-3 text-md text-content-secondary font-mono font-medium">
    Type
  </span>
  <li
    className={`${filter2 == 1 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(1);
    }}
  >
    <a>Creator</a>
  </li>
  <li
    className={`${filter2 == 2 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(2);
    }}
  >
    <a>Collector</a>
  </li>
  <li
    className={`${filter2 == 3 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(3);
    }}
  >
    <a>Other</a>
  </li>
</ul>
<ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
  <span className="p-3 text-md text-content-secondary font-mono font-medium">
    Social Verification
  </span>
  <li
    className={`${filter2 == 1 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(1);
    }}
  >
    <a>Twitter</a>
  </li>
  <li
    className={`${filter2 == 2 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(2);
    }}
  >
    <a>Instagram</a>
  </li>
  <li
    className={`${filter2 == 3 ? "border-b-2 bg-base-300" : ""}`}
    onClick={() => {
      setFilter2(3);
    }}
  >
    <a>Not Verified</a>
  </li>
</ul>
</div> */}