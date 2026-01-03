import "../../styles/footer.css";


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Column 1 */}
                <div className="footer-col">
                    <h3>People’s Real Estate Brokers</h3>
                    <p className="footer-tagline">
                        Find your next home with confidence.
                    </p>

                    <div className="app-buttons">
                        <button className="store-btn">App Store</button>
                        <button className="store-btn">Google Play</button>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h4>Resources</h4>
                    <ul>
                        <li>Property guides</li>
                        <li>Market insights</li>
                        <li>Mortgage calculator</li>
                        <li>Buying advice</li>
                        <li>Selling advice</li>
                        <li>Energy efficiency</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h4>Search</h4>
                    <ul>
                        <li>Homes for sale</li>
                        <li>Homes for rent</li>
                        <li>New developments</li>
                        <li>Commercial property</li>
                        <li>Find an agent</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-col">
                    <h4>Locations</h4>
                    <ul>
                        <li>London</li>
                        <li>Manchester</li>
                        <li>Birmingham</li>
                        <li>Leeds</li>
                        <li>Edinburgh</li>
                        <li>Overseas</li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Press centre</li>
                        <li>Contact us</li>
                        <li>Investor relations</li>
                    </ul>

                    <button className="pro-btn">Professional Portal</button>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="footer-links">
                    <span>Site map</span>
                    <span>Help</span>
                    <span>Cookies</span>
                    <span>Safety & Security</span>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>

                <div className="social-icons">
                    <span>Facebook</span>
                    <span>X</span>
                    <span>Instagram</span>
                    <span>YouTube</span>
                </div>
            </div>

            <div className="copyright">
                © 2026 People’s Real Estate Brokers. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
