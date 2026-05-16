"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Accordion from "@/component/accordion/accordion";
import { useEffect, useState, useRef } from "react";

const searchQueries = [
	"Show me mentions of MTN in Nigeria",
	"What's the sentiment around our campaign?",
	"Track competitor share of voice in Kenya",
	"Alert me about crisis mentions in real-time"
];

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

function AnimatedSearchForm() {
	const [displayText, setDisplayText] = useState("");
	const [queryIndex, setQueryIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const charIndexRef = useRef(0);

	useEffect(() => {
		const currentQuery = searchQueries[queryIndex];
		let timeout;

		if (isTyping) {
			if (charIndexRef.current < currentQuery.length) {
				timeout = setTimeout(() => {
					setDisplayText(currentQuery.slice(0, charIndexRef.current + 1));
					charIndexRef.current += 1;
				}, 80);
			} else {
				timeout = setTimeout(() => {
					setIsTyping(false);
				}, 1500);
			}
		} else {
			if (charIndexRef.current > 0) {
				timeout = setTimeout(() => {
					charIndexRef.current -= 1;
					setDisplayText(currentQuery.slice(0, charIndexRef.current));
				}, 40);
			} else {
				timeout = setTimeout(() => {
					setQueryIndex((prev) => (prev + 1) % searchQueries.length);
					setIsTyping(true);
				}, 300);
			}
		}

		return () => clearTimeout(timeout);
	}, [displayText, isTyping, queryIndex]);

	return (
		<div className={styles.animatedSearch}>
			<div className={styles.searchIcon}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
			</div>
			<span className={styles.searchText}>{displayText}</span>
			<span className={styles.cursor}>|</span>
			<div className={styles.searchCTA}>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		</div>
	);
}

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
			<div className={`${styles.hero} jumbotron`}>
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
							<h1><span>Real-time</span> PR & Media Intelligence for Africa</h1>
							<div className="cta-content">
								<p>Monitor brand mentions, spot crises early, and prove campaign impact across Africa.</p>
								<div className="action-item">
									<Link href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/signup`} target="_blank" className="form-button">
										Get Activ free
									</Link>
								</div>
								<AnimatedSearchForm />
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
								<h2><span>One</span> platform, <span>four</span> critical PR capabilities</h2>
								<p className={styles.collectionSummary}>Track every mention, stop risks early, own your narrative, and prove your PR impact - all in one powerful platform.</p>
								<div className="action-item">
									<Link href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/signup`} className="form-button">
										Get Activ free
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.collectionItems}>
							<div className={styles.collectionItem}>
								<div className={styles.collectionItemHeader}>
									<h3><span>Monitor</span> investment performance</h3>
									<p className={styles.collectionSummary}>From 401(k)s to crypto, track the latest activity across your entire portfolio and compare performance to major indices.</p>
								</div>
							</div>
							<div className={styles.collectionItem}>
								<div className={styles.collectionItemHeader}>
									<h3><span>Visualize</span> your entire allocation</h3>
									<p className={styles.collectionSummary}>Know where your money is and whether it matches your goals with a personalized risk profile.</p>
								</div>
							</div>
							<div className={styles.collectionItem}>
								<div className={styles.collectionItemHeader}>
									<h3><span>Dive</span> into any position</h3>
									<p className={styles.collectionSummary}>From individual stocks to ETFs, get real-time performance, key financials, and personalized insights for every holding.</p>
								</div>
							</div>
							<div className={styles.collectionItem}>
								<div className={styles.collectionItemHeader}>
									<h3><span>Track</span> what’s next</h3>
									<p className={styles.collectionSummary}>Explore the market, add assets to your watchlist, and stay ahead with news and AI insights.</p>
								</div>
							</div>
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