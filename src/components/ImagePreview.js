import useFetch from '../hooks/useFetch';
import '../index.css';

const ImagePreview = ({ title, path }) => {
  const { data: src, isPending } = useFetch('https://server.cohn-family.photos/api/photos/' + path);

  return ( 
    <div>
      { isPending && <div>Loading...</div> }
      { src &&
      <div className="image-preview">
        <h2>{ title }</h2>
        <img src={src.url} alt="Error loading image" />
      </div>
      }
    </div>
   );
}
 
export default ImagePreview;