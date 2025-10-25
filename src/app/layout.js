import { allianceSansSerif, suisseSansSerif } from "@/fonts";
import "@/styles/globals.css";
import Header from "@/component/layout/header";

export const metadata = {
	metadataBase: 'https://activ.africa',
	title: "Activ | Media Intelligence for Africa",
	description: "Uncover Media Insights Across Africa's Digital Landscape",
	openGraph: {
		title: "Activ | Media Intelligence for Africa",
		description: "Uncover Media Insights Across Africa's Digital Landscape",
		url: "https://activ.africa",
		siteName: "Activ Media Intelligence",
		images: [
		{ url: "/images/og.png", width: 1200, height: 630, alt: "Activ Media Intelligence" }
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Activ | Media Intelligence for Africa",
		description: "Uncover Media Insights Across Africa's Digital Landscape",
		images: ["/images/og.png"],
	},
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