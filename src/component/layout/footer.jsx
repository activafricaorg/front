import styles from "@/app/page.module.css"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <ul className={styles.anchorLinks}>
                        <li><Link href="/privacy-policy">Privacy</Link></li>
                        <li><Link href="/cookie-policy">Cookies</Link></li>
                    </ul>
                    <p>© 2025 Activ Africa</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;