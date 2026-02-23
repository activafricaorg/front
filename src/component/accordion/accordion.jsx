"use client";

import { useState } from "react";
import styles from "./accordion.module.css";

export default function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleItem = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className={styles.accordion}>
			{items.map((item, index) => (
				<div
					key={index}
					className={`${styles.accordionItem} ${openIndex === index ? styles.open : ""}`}
				>
					<button
						className={styles.accordionHeader}
						onClick={() => toggleItem(index)}
						aria-expanded={openIndex === index}
					>
						<h3 className={styles.accordionTitle}>{item.question}</h3>
						<span className={styles.accordionIcon}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 9L12 15L18 9"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</button>
					<div className={styles.accordionContent}>
						<div className={styles.accordionBody}>{item.answer}</div>
					</div>
				</div>
			))}
		</div>
	);
}
