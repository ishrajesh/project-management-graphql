import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div classname="d-flex flex-column justify-content-center align-items-center mt-6">
      <FaExclamationTriangle
        className="text-danger"
        size="5rem"
      ></FaExclamationTriangle>
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
}
