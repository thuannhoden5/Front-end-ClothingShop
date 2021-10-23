import React from "react";

const Picture = () => {
  return (
    <div className="card" style={{ width: 250, height: 280 }}>
      <img
        src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt=""
        className="img-thumbnail"
        style={{
          width: 250,
          height: 250,
          backgroundSize: "cover",
        }}
      />
      <h5 className="card-title text-center">hello</h5>
    </div>
  );
};

export default Picture;
