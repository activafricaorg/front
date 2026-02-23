"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Accordion from "@/component/accordion/accordion";
import { useEffect, useState } from "react";

const faqItems = [
	{
		question: "What is Activ and how does it work?",
		answer: "Activ is a real-time PR and media intelligence platform designed specifically for Africa. It monitors brand mentions across news outlets, social media, and online publications, giving you instant alerts and comprehensive analytics to manage your brand reputation effectively."
	},
	{
		question: "Which African countries and media sources do you cover?",
		answer: "We cover all 54 African countries with access to thousands of media sources including major newspapers, TV stations, radio broadcasts, online publications, blogs, and social media platforms. Our coverage spans English, French, Portuguese, Arabic, and Swahili language sources."
	},
	{
		question: "How quickly will I be alerted about brand mentions?",
		answer: "Our real-time monitoring system delivers alerts within minutes of publication. You can customize alert preferences by urgency level, sentiment, or source type to ensure you never miss critical mentions while avoiding notification fatigue."
	},
	{
		question: "Can I measure the ROI of my PR campaigns?",
		answer: "Yes, Activ provides comprehensive analytics including media reach, sentiment analysis, share of voice, and PR value metrics. Our reporting dashboard lets you demonstrate campaign impact with clear, visual reports that stakeholders can easily understand."
	},
	{
		question: "Is there a free trial available?",
		answer: "Absolutely! We offer a free trial that gives you full access to all platform features. You can monitor your brand, explore our analytics, and experience the platform's capabilities before committing to a subscription."
	}
];

export default function Home() {
	useEffect(() => {
		const v = document.getElementById('bgvid');
		if (!v) return;

		// iOS/Safari robustness: ensure muted/inline before play
		v.muted = true;
		v.playsInline = true;

		// Try to play immediately
		const tryPlay = () => v.play().catch(() => { /* silently ignore if blocked */ });
		if (v.readyState >= 2) tryPlay(); else v.addEventListener('canplay', tryPlay, { once: true });

		// If Safari pauses (e.g., after tab switch), nudge it
		const onVisibility = () => {
		if (!document.hidden && v.paused) tryPlay();
		};
		document.addEventListener('visibilitychange', onVisibility);

		// If someone injects controls or iOS shows overlay, keep it background-only
		const onPause = () => { if (!document.hidden) tryPlay(); };
		v.addEventListener('pause', onPause);

		document.body.classList.add("home");

		return () => {
			document.body.classList.remove("home");
			document.removeEventListener('visibilitychange', onVisibility);
			v.removeEventListener('pause', onPause);
		};
	}, []);

	return (
		<div className={styles.page}>
			<div className={styles.hero}>
				<div className="bg-video">
					<div className="video w-embed w-script">
					<div className="video-wrap" aria-hidden="true">
						<video
						id="bgvid"
						autoPlay
						muted
						playsInline
						loop
						preload="metadata"
						className="bg-video"
						disablePictureInPicture
						controlsList="nodownload noplaybackrate nofullscreen"
						>
						<source src="/videos/default.mp4" type="video/mp4" />
						</video>
					</div>

					<style>{`
						.video-wrap { position: relative; width: 100%; height: 100%; overflow: hidden; }
						.video-wrap video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
							pointer-events: none; /* prevents tap-to-pause overlay on iOS */ }
					`}</style>
					</div>
					<div className="hero-gradient off-wite"></div>
				</div>
				<div className="container">
					<div className="main">
						<div className="cta">
							<h1>Real-time PR & Media Intelligence for Africa</h1>
							<div className="cta-content">
								<p>Monitor brand mentions, spot crises early, and prove campaign impact across Africa.</p>
								<div className="action-item">
									<Link href="https://activafrica.notion.site/2939dee2da81807690cbd2129e0c5318" target="_blank" className="form-button">
										Get Activ free
									</Link>
									<Link href="https://activafrica.notion.site/2939dee2da81807690cbd2129e0c5318" target="_blank" className="form-button secondary">
										Book a Demo
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.products}>
				<div className="container">
					<div className={styles.productFeatures}>
						<div className={styles.collectionHeadingWrapper}>
							<div className={styles.collectionHeading}>
								<h2>One platform, four critical PR capabilities</h2>
								<p>Track every mention, stop risks early, own your narrative, and prove your PR impact - all in one powerful platform.</p>
								<div className="action-item">
									<Link href="https://activafrica.notion.site/2939dee2da81807690cbd2129e0c5318" target="_blank" className="form-button">
										Book a Demo
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.collectionItems}>
							<div className={styles.collectionItem}>
							</div>
							<div className={styles.collectionItem}>
							</div>
							<div className={styles.collectionItem}>
							</div>
							<div className={styles.collectionItem}>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.enterprise}>
				<div className="container">
					<div className={styles.enterpriseGrid}>
						<div className={styles.enterpriseItem1}>
						</div>
						<div className={styles.enterpriseItem2}>
						</div>
						<div className={styles.enterpriseItem3}>
						</div>
						<div className={styles.enterpriseItem4}>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.upsell}>
				<div className="container">
					<div className={styles.upsellContent}>
					</div>
				</div>
			</div>
			<div className={styles.faq}>
				<div className="container">
					<div className={styles.faqContent}>
						<div className={styles.faqHeading}>
							<h2>FAQs</h2>
							<p>Got questions? Here are the answers.</p>
						</div>
						<div className={styles.faqAccordion}>
							<Accordion items={faqItems} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}