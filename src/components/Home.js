import ImageDisplay from "./ImageDisplay";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: photos, isPending, error } = useFetch('https://server.cohn-family.photos/api/photos/');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { photos && <ImageDisplay photos={photos} /> }
    </div>
  );
}
 
export default Home;