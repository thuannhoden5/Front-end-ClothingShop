import React from "react";
import "./Search.styles.scss";
import { useState } from "react";
import CollectionItem from "../../CollectionItem/Collectiontem.component";
const Search = () => {
  const [product, setProduct] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setQ(event.target.value);
    console.log(q);
  };
  const data = [
    { id: 1, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 2, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 3, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 4, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 5, name: "Hello", imageUrl: "fds", price: 100 },
    { id: 6, name: "Hello", imageUrl: "fds", price: 100 },
  ];
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
          <h1>Result for `{q}`</h1>
          <div className="body-container">
            {data.map((item) => (
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
