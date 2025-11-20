"use client";

import styles from "../page.module.css"
import Link from "next/link";

export default function CookiePolicy() {
	return (
		<div className={styles.page}>
			<div className="container">
				<div className="main">
                    <div className="page-wrapper">
                        <h1>Cookie Policy</h1>
                        <div className="page-content">
                            <p>This Cookie Policy explains how Activ ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at http://activ.africa ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
							<p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>
							<h2>What are cookies?</h2>
							<p>Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used by website owners to ensure their sites function properly, operate more efficiently, and provide useful reporting information.</p>
							<p>Cookies set directly by the website owner (in this case, Activ) are known as first-party cookies. Cookies set by parties other than the website owner are called third-party cookies. These third-party cookies enable features or functionality provided by outside services—such as advertising, interactive content, and analytics—to appear on or through the website. The providers of these cookies can recognize your device both when you visit our site and when you visit other websites that use their services.</p>
							<h2>Why do we use cookies?</h2>
							<p>We use both first-party and third-party cookies for several reasons. Some cookies are required for technical purposes to ensure our Website functions properly; we refer to these as “essential” or “strictly necessary” cookies. Other cookies help us understand user interests and activity so we can improve the experience across our online properties. Third parties may also place cookies through our Website for purposes such as advertising, analytics, and additional functionality. More details on these categories are provided below.</p>
							<h2>How can I control cookies?</h2>
							<p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
							<p>You can access the Cookie Consent Manager from the notification banner or directly on our Website. If you decide to reject certain cookies, you may continue to use our Website; however, some features or sections may not function as intended. You can also adjust your web browser settings to accept or refuse cookies at any time.</p>
							<h2>Analytics and customization cookies:</h2>
							<p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
							<h2>How can I control cookies on my browser?</h2>
							<p>As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>
							<ul className={styles.anchorLinks}>
								<li><Link href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" target="_blank">Chrome</Link></li>
								<li><Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Internet Explorer</Link></li>
								<li><Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" target="_blank">Firefox</Link></li>
								<li><Link href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank">Safari</Link></li>
								<li><Link href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Edge</Link></li>
								<li><Link href="https://help.opera.com/en/latest/web-preferences/" target="_blank">Opera</Link></li>
							</ul>
							<p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>
							<ul className={styles.anchorLinks}>
								<li><Link href="https://www.aboutads.info/choices/" target="_blank">Digital Advertising Alliance</Link></li>
								<li><Link href="https://www.youronlinechoices.com/" target="_blank">European Interactive Digital Advertising Alliance</Link></li>
							</ul>
							<h2>What about other tracking technologies, like web beacons?</h2>
							<p>Cookies are not the only way we recognize or track visitors on our Website. From time to time, we may also use similar technologies, such as web beacons (also known as “tracking pixels” or “clear gifs”). These are tiny graphic files with a unique identifier that let us know, for example, when a page has been visited or when an email containing the beacon has been opened.</p>
							<p>We use these technologies to:</p>
							<ul className={styles.anchorLinks}>
								<li>Understand how users move between pages on our Website</li>
								<li>Work alongside cookies to remember your preferences</li>
								<li>See whether you arrived on our Website from an online ad on a third-party site</li>
								<li>Improve site performance and user experience</li>
								<li>Measure the effectiveness of our email and marketing campaigns</li>
							</ul>
							<p>In many cases, these technologies rely on cookies to function properly. If you choose to decline cookies, some of these features may not work as intended.</p>
							<h2>Do you serve targeted advertising?</h2>
							<p>Some third parties may place cookies on your device to deliver advertising through our Website. These providers may use information about your visits to Activ and other websites to show you ads that are more relevant to your interests. They may also use technologies, such as cookies or web beacons, to measure the effectiveness of the ads you see.</p>
							<p>The information collected for advertising purposes does not allow us or these third parties to directly identify you (such as your name or contact details), unless you choose to provide that information to us.</p>
							<h2>How often will you update this Cookie Policy?</h2>
							<p>We may revise this Cookie Policy from time to time. For example, to reflect changes in the cookies we use or to comply with operational, legal, or regulatory requirements. We encourage you to review this Policy periodically to stay informed about our use of cookies and similar technologies.</p>
							<p>The “Last Updated” date at the top of this Policy indicates when it was most recently revised.</p>
							<h2>Where can I get further information?</h2>
							<p>If you have questions about how Activ uses cookies or other tracking technologies, please contact us at support@activ.africa.</p>
						</div>
                    </div>
				</div>
			</div>
		</div>
	);
}