import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-left">
                        <Link href="/"><Image className="footer-logo" src={"/images/logo.svg"} alt={"Activ Africa"} width={12} height={12} /></Link>
                        <p className="footer-copyright">© 2026 Activ Africa</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><Link href="/about">Overview</Link></li>
                                <li><Link href="/careers">Brand Monitoring</Link></li>
                                <li><Link href="/contact">Crisis Management</Link></li>
                                <li><Link href="/contact">Campaign Monitoring</Link></li>
                                <li><Link href="/contact">Publisher Intelligence</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/features">About</Link></li>
                                <li><Link href="/features">Pricing</Link></li>
                                <li><Link href="/pricing">Contact us</Link></li>
                                <li><Link href="/integrations">Linkedin</Link></li>
                                <li><Link href="/contact">X</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><Link href="/features">Terms</Link></li>
                                <li><Link href="/pricing">Privacy Policy</Link></li>
                                <li><Link href="/integrations">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;