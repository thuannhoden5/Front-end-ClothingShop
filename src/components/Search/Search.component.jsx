// import React from "react";
// import "./Search.styles.scss";
// import { useState, useEffect } from "react";
// import CollectionItem from "../CollectionItem/Collectiontem.component";
// import axiosInstance from "../../utils/axios";
// const Search = () => {
//   const data = [
//     { id: 1, name: "Hello", imageUrl: "fds", price: 100 },
//     { id: 2, name: "Hello", imageUrl: "fds", price: 100 },
//     { id: 3, name: "Hello", imageUrl: "fds", price: 100 },
//     { id: 4, name: "Hello", imageUrl: "fds", price: 100 },
//     { id: 5, name: "Hello", imageUrl: "fds", price: 100 },
//     { id: 6, name: "Hello", imageUrl: "fds", price: 100 },
//   ];
//   const [product, setProduct] = useState([...data]);
//   const [price, setPrice] = useState(10);
//   const [q, setQ] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChangePrice = async (event) => {
//     console.log("hello");
//     console.log(event.target.value);
//     let a = event.target.value.split("-");
//     console.log(a);
//     event.preventDefault();
//     setLoading(true);

//     const result = await axiosInstance.get(
//       `/product/findAllProductByFilter?fromPrice=&toPrice=${
//         a[1] * 1
//       }&category[0]=paint&category[1]=shirtcategory[0]=accessory`
//     );
//     if (result.data.success) {
//       // setProduct(result.data.data);
//     }
//   };

//   useEffect(() => {
//     console.log(product);
//   }, [price]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);
//   };

//   return (
//     <div className="container">
//       <div className="checkbox">
//         <h2>Search Filter</h2>
//         <div>
//           <div>
//             <input
//               type="radio"
//               name="price"
//               value="0-10"
//               onChange={handleChangePrice}
//             />
//             <label for="price">0$ - 10$</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="price"
//               value="0-10"
//               onChange={handleChangePrice}
//             />
//             <label for="price">10$ - 20$</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="price"
//               value="0-10"
//               onChange={handleChangePrice}
//             />
//             <label for="price">20$ - 30$</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="price"
//               value="0-10"
//               onChange={handleChangePrice}
//             />
//             <label for="price">30$ - 50$</label>
//           </div>
//         </div>
//       </div>
//       {loading ? (
//         <div className="body-container">
//           <h1 className="result">Result for `{q}`</h1>
//           <div className="items">
//             {data.map((item) => (
//               <div className="item" key={item.id}>
//                 <CollectionItem item={item} key={item.id} />
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };
// export default Search;
