import ImagePreview from "./ImagePreview";

const ImageDisplay = ({ photos }) => {
  return (
    <div className="image-display">
      {photos.map((photo) => (
        <ImagePreview
          title={photo.title}
          path={photo.path}
          key={photo.id}
        />
      ))} 
    </div>
  );
}
 
export default ImageDisplay;