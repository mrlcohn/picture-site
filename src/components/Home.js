import ImageDisplay from "./ImageDisplay";
import useFetch from "../hooks/useFetch";

const Home = () => {
  // const { data: images, isPending, error } = useFetch('http://localhost:27017/images');
  const images = [
    {
      "title": "Holiday Photo",
      "id": "00000001",
      "path": "/examples/example1.png"
    },
    {
      "title": "Birthday Party",
      "id": "00000002",
      "path": "/examples/example2.jpg"
    },
    {
      "title": "Horse Ride",
      "id": "00000003",
      "path": "/examples/example3.jpg"
    }
  ]
  const isPending = false;
  const error = null;

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { images && <ImageDisplay images={images} /> }
    </div>
  );
}
 
export default Home;