import '../index.css';

const ImagePreview = ({ title, path }) => {
  let src;

  fetch('server.cohn-family.photos/photos' + path)
    .then(response => response.json())
    .then(src = response.url);

  return ( 
    <div className="image-preview">
      <h2>{ title }</h2>
      <img src={src} alt="Error loading image" />
    </div>
   );
}
 
export default ImagePreview;