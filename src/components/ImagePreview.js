import useFetch from '../hooks/useFetch';
import '../index.css';

const ImagePreview = ({ title, path }) => {
  const { data, isPending } = useFetch('http://server.cohn-family.photos/photos' + path);

  const src = data;
  
  console.log(src);

  return ( 
    <div>
      { isPending && <div>Loading...</div> }
      { data &&
      <div className="image-preview">
        <h2>{ title }</h2>
        <img src={src.url} alt="Error loading image" />
      </div>
      }
    </div>
   );
}
 
export default ImagePreview;