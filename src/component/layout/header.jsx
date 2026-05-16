import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <Link href="/"><Image className="logo" src={"/images/logo.svg"} alt={"Activ Africa"} width={72} height={25} /></Link>
                    <nav className="header-nav">
                        <Link href="/product">Product</Link>
                        <Link href="/resources">Resources</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="https://calendar.app.google/iM3hTvcQCzAZUnT8A" target="_blank">Book a Demo</Link>
                    </nav>
                    <div className="header-buttons">
                        <Link href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/login`} className="form-button secondary">
                            Log in
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/signup`} className="form-button">
                            Get started free
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;