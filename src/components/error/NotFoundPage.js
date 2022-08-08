import './notFound.css';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className='errWrapper'>
        <h1>404</h1>
        <div class="cloak__wrapper">
            <div class="cloak__container">
                <div class="cloak"></div>
            </div>
        </div>
        <div class="info">
            <h2>We can't find that page</h2>
            <Link to="/home">Home</Link>
        </div>
    </section>
  )
}

export default NotFoundPage