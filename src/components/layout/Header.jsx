import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                {/* Logo */}
                <Link to="/" className="logo">
                    People’s <span>Real Estate</span>
                </Link>

                {/* Navigation */}
                <nav className="nav">
                    <a href="#">Buy</a>
                    <a href="#">Rent</a>
                    <a href="#">House Prices</a>
                    <a href="#">Find Agent</a>
                    <a href="#">Commercial</a>
                    <a href="#">Inspire</a>
                    <a href="#">Overseas</a>
                </nav>

                {/* Action */}
                <button className="signin-btn">Sign in</button>
            </div>
        </header>
    );
};

export default Header;
