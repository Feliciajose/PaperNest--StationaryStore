const products = [
  { id: "pen-1", name: "Premium Gel Pen", price: 179, category: "Pen", type: "Single", rating: 4.6, img: "/asserts/pen.png" },
  { id: "journal-1", name: "Creative Writing Journal Pack", price: 899, category: "Journal", type: "Multi", rating: 4.9, img: "/asserts/journal.png" },
  { id: "pencil-1", name: "Drawing Pencil", price: 59, category: "Pencil", type: "Single", rating: 4.2, img: "/asserts/pencil.png" },
  { id: "notebook-1", name: "Spiral Notebook", price: 199, category: "Notebook", type: "Single", rating: 4.1, img: "/asserts/notebook.png" },

  { id: "pencil-1", name: "Artist Pencil Set", price: 199, category: "Pencil", type: "Multi", rating: 4.6, img: "/asserts/pencil.png" },
  { id: "journal-1", name: "Daily Planner Journal", price: 349, category: "Journal", type: "Single", rating: 4.7, img: "/asserts/journal.png" },
  { id: "pen-1", name: "Classic Ball Pen", price: 99, category: "Pen", type: "Single", rating: 4.1, img: "/asserts/pen.png" },
  { id: "notebook-1", name: "Office Notebook Pack", price: 799, category: "Notebook", type: "Multi", rating: 4.7, img: "/asserts/notebook.png" },


  { id: "pencil-1", name: "HB Wooden Pencil", price: 39, category: "Pencil", type: "Single", rating: 3.9, img: "/asserts/pencil.png" },
  { id: "notebook-1", name: "Premium Paper Notebook", price: 349, category: "Notebook", type: "Single", rating: 4.5, img: "/asserts/notebook.png" },
  { id: "pen-1", name: "Luxury Fountain Pen", price: 599, category: "Pen", type: "Single", rating: 4.8, img: "/asserts/pen.png" },
  { id: "journal-1", name: "Journal Gift Set", price: 699, category: "Journal", type: "Multi", rating: 4.6, img: "/asserts/journal.png" },


  { id: "pencil-1", name: "Graphite Pencil Set", price: 249, category: "Pencil", type: "Multi", rating: 4.4, img: "/asserts/pencil.png" },
  { id: "notebook-1", name: "Ruled Notebook", price: 149, category: "Notebook", type: "Single", rating: 3.8, img: "/asserts/notebook.png" },
  { id: "pen-1", name: "Office Writing Pens Set", price: 399, category: "Pen", type: "Multi", rating: 4.5, img: "/asserts/pen.png" },
  { id: "journal-1", name: "Hardcover Journal", price: 499, category: "Journal", type: "Single", rating: 4.8, img: "/asserts/journal.png" },
];


let filteredProducts = [...products];

const countEl = document.getElementById("product-count");
