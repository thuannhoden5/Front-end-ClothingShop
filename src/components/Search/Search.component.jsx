import React from "react";
import "./Search.styles.scss";
import { useState, useEffect } from "react";
import CollectionItem from "../CollectionItem/Collectiontem.component";
import CustomButton from "../custom-button/custom-button.component";
const Search = () => {
  const data = [
    { id: 1, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 2, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 3, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 4, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 5, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 6, name: "Hello", imageUrl: "fds", price: 100 },
  ];
  const [product, setProduct] = useState([...data]);
  const [price, setPrice] = useState(10);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setQ(event.target.value);
    console.log(q);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    console.log(event.target.value);
  };
  console.log(product);

  useEffect(() => {
    console.log(product);
  }, [price]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="/">
        <input
          type="search"
          placeholder="Search ..."
          name="q"
          className="search"
          autoComplete="off"
          spellCheck="false"
          onChange={handleChange}
        />
      </form>
      {loading ? (
        <>
          <div className="header-result">
            <h1>Result for `{q}`</h1>

            <div>
              <label for="price">Choose Range Price</label>
              <select name="price" id="" onChange={handleChangePrice}>
                <option value="10"> 10</option>
                <option value="20"> 20</option>
              </select>
            </div>
          </div>
          <div className="body-container">
            {product.map((item) => (
              <div className="item" key={item.id}>
                <CollectionItem item={item} key={item.id} />
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Search;
