const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    © {new Date().getFullYear()} People’s Real Estate Brokers
                </p>
                <p className="footer-sub">
                    Built with React • Coursework Project
                </p>
            </div>
        </footer>
    );
};

export default Footer;
