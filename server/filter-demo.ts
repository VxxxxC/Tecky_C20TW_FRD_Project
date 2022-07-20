let items = [
    { img: "img/1.jpeg", name: "test item 1", price : 80},
    { img: "img/2.jpeg", name: "test item 2", price : 500},
    { img: "img/3.jpeg", name: "test item 3", price : 4000},
    { img: "img/4.jpeg", name: "test item 4", price : 18000},
]

console.log(items.filter((item)=>item.price > 500))