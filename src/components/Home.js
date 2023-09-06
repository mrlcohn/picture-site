import useFetch from "../hooks/useFetch";
import { usePhotoContext } from "../hooks/usePhotoContext";

import ImageDisplay from "./ImageDisplay";
const Home = () => {
  const { photos, dispatch } = usePhotoContext();

  const { data, isPending, error } = useFetch('https://server.cohn-family.photos/api/photos/');
  dispatch({ type: 'SET_PHOTOS', payload: data });

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { photos && <ImageDisplay photos={photos} /> }
    </div>
  );
}
 
export default Home;