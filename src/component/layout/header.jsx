import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <Image className="logo" src={"/images/logo.svg"} alt={"Activ Africa"} width={72} height={25} />
                    <Link href="https://activafrica.notion.site/2939dee2da81807690cbd2129e0c5318" target="_blank" className="form-button">
                        Join our research
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 17" fill="none" className="button-arrow"><path d="M0.5 8.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5 3.5L15.5 8.5L10.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;