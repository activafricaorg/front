import { allianceSansSerif, suisseSansSerif } from "@/fonts";
import "@/styles/globals.css";
import Header from "@/component/layout/header";

export const metadata = {
  title: "Activ Media Intelligence",
  description: "Uncover Media Insights Across Africa's Digital Landscape",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${allianceSansSerif.variable} ${suisseSansSerif.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}