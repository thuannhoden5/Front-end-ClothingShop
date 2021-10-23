import React from "react";

import CollectionItem from "../CollectionItem/Collectiontem.component";

import "./PreviewCollection.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview ">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview d-flex flex-wrap">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div style={{ flexBasis: 200 }}>
            <CollectionItem key={item.id} item={item} />
          </div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
