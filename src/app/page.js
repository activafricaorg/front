"use client";

import styles from "./page.module.css";
import Waitlist from "@/component/form/waitlist";
import { useEffect, useState } from "react";

export default function Home() {
	const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
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
					<h1>Uncover Media Insights Across Africa&apos;s Digital Landscape</h1>
					<div className="cta-content">
						<p>AI-powered platform that monitors Africa&apos;s news and media conversations, helping brands, agencies, and media houses protect reputation, capture opportunities, and uncover blind spots.</p>
						<div className="action-item">
							<button onClick={() => setIsWaitlistOpen(true)} className="form-button">
								Join our waitlist
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 17" fill="none" className="button-arrow"><path d="M0.5 8.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5 3.5L15.5 8.5L10.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
							</button>
						</div>
						<Waitlist open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
						<div className={`modal-tint ${isWaitlistOpen ? 'active' : ''}`} onClick={() => setIsWaitlistOpen(false)}></div>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}