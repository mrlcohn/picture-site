import '../index.css';

const ImagePreview = ({ title, src, alt }) => {
  // const source = require(src).default;
  
  // console.log(src);

  return ( 
    <div className="image-preview">
      <h2>{ title }</h2>
      <img src={src} alt={alt} />
    </div>
   );
}
 
export default ImagePreview;