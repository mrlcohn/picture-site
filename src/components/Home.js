import ImageDisplay from "./ImageDisplay";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: images, isPending, error } = useFetch('http://localhost:27017/images');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { images && <ImageDisplay images={images} /> }
    </div>
  );
}
 
export default Home;