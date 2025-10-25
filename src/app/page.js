"use client";

import styles from "./page.module.css";
import Waitlist from "@/component/form/waitlist";
import { useEffect } from "react";

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

		return () => {
		document.removeEventListener('visibilitychange', onVisibility);
			v.removeEventListener('pause', onPause);
		};
	}, []);
	
	return (
		<div className={styles.page}>
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
					.bg-video  { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
						pointer-events: none; /* prevents tap-to-pause overlay on iOS */ }
				`}</style>
				</div>
				<div className="hero-gradient off-wite"></div>
			</div>
			<div className="container">
				<div className="main">
				<div className="cta">
					<h1>Uncover Media Insights Across Africa's Digital Landscape</h1>
					<div className="cta-content">
					<p>AI-powered platform that monitors Africa's news and media conversations, helping brands, agencies, and media houses protect reputation, capture opportunities, and uncover blind spots.</p>
					<Waitlist />
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}