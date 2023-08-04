import MyCourses from "./MyCourses";
import { Link } from "react-router-dom";

function MyProfile() {
  return (
    <div>
      <Link to="/">Atrás</Link>
      <MyCourses />
    </div>
  );
}

export default MyProfile;
