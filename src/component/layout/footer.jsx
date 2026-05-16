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
                                <li><Link href="/product">Overview</Link></li>
                                <li><Link href="/product/brand-monitoring">Brand Monitoring</Link></li>
                                <li><Link href="/product/crises-management">Crisis Management</Link></li>
                                <li><Link href="/product/campaign-monitoring">Campaign Monitoring</Link></li>
                                <li><Link href="/product/publisher-intelligence">Publisher Intelligence</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/pricing">Pricing</Link></li>
                                <li><Link href="/contact">Contact us</Link></li>
                                <li><Link href="https://www.linkedin.com/company/activ-intelligence/" target="_blank">Linkedin</Link></li>
                                <li><Link href="https://x.com/ActivAfrica" target="_blank">X</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><Link href="/terms-of-use">Terms</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;