import { Link } from "react-router-dom";

import { Logo } from "../components";

import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>I&apos;m  baby tacos whatever chillwave, food truck keytar craft beer ethical. DSA fanny pack lyft everyday carry. Irony williamsburg polaroid cold-pressed mukbang ennui. Offal live-edge hashtag hexagon leggings. Locavore schlitz stumptown authentic franzen, ascot hexagon cloud bread.</p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn login-link">
                        Login
                    </Link>
                </div>
                <img src={main} alt="job-hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing
