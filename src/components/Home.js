import ImageDisplay from "./ImageDisplay";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: photos, isPending, error } = useFetch('https://server.cohn-family.photos/photos/');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { photos && <ImageDisplay photos={photos.data} /> }
    </div>
  );
}
 
export default Home;