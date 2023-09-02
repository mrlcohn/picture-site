import ImagePreview from "./ImagePreview";

const ImageDisplay = ({ images }) => {
  return (
    <div className="image-display">
      {images.map((image) => (
        <ImagePreview
          title={image.title}
          path={image.path}
          key={image.id}
        />
      ))} 
    </div>
  );
}
 
export default ImageDisplay;