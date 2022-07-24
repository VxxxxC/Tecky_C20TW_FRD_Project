// import React, { useEffect } from "react";

function Category() {
  const categories = [
    {
      name: "PFPs and Avatars",
    },
    {
      name: "Generative art",
    },
    {
      name: "Collectibles",
    },
    {
      name: "Photography",
    },
    {
      name: "Music",
    },
    {
      name: "Ticketing",
    },
    {
      name: "Painting",
    },
    {
      name: "Video",
    },
    {
      name: "Ceramics and Glass",
    },
    {
      name: "Fibre and Textile",
    },
    {
      name: "Leatherwork",
    },
    {
      name: "Fashion",
    },
    {
      name: "Needlework",
    },
    {
      name: "Wood and Furniture",
    },
    {
      name: "Stone",
    },
    {
      name: "Metal",
    },
    {
      name: "Other",
    },
  ];

  return (
    <>
      {categories.map((category) => (
        <option>{category.name}</option>
      ))}
    </>
  );
}
Category();
export default Category;
