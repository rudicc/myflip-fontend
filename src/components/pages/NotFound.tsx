import { Link } from 'react-router-dom';
//import {useNavigate, useLocation} from 'react-router-dom';
function NotFound() {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    // console.log(from); 
  return (
    //navigate(from, { replace: true })
    <>
        <div>
            <Link to="/" >Home</Link>
        </div>
    </>
  )
}

export default NotFound
