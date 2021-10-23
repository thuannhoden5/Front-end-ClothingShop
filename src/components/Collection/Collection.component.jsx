import React from "react";
import "./Collection.styles.scss";
import { connect } from "react-redux";

import CollectionItem from "../CollectionItem/Collectiontem.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items d-flex flex-wrap">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
