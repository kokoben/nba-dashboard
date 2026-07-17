import { Link } from 'react-router';

function NotFound() {
  return (
    <>
      <div>Page not found</div>
      <div>
        Return <Link to='/'>Home</Link>
      </div>
    </>
  )
}

export default NotFound;
