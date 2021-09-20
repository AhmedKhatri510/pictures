import React from "react";

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });
  console.log(images);

  return <div>{images}</div>;
};

export default ImageList;
