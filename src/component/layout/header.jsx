import Image from "next/image";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a className="logo">
					<Image src={"/activ_logo.svg"} alt={"Activ Africa"} width={72} height={25} />
				</a>
			</div>
		</header>
	)
}

export default Header;