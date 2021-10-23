import React from "react";
import PreviewCollection from "../PreviewCollection/PreviewCollection.component";

import "./CollectionsOverview.styles.scss";

import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({ collections }) => {
  console.log("collections", collections);
  return (
    <div className="collections-overview ">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} id={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
