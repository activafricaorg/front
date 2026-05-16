"use client";

import styles from "./pricing.module.css";
import pageStyles from "../page.module.css";

export default function Pricing() {
	const plans = [
		{
			name: "Free",
			price: "$0",
			period: "forever",
			description: "Perfect for individuals getting started with news monitoring.",
			features: [
				"5 keyword alerts",
				"Daily email digest",
				"7-day article history",
				"Basic analytics",
				"1 user",
			],
			cta: "Get Started",
			highlighted: false,
		},
		{
			name: "Premium",
			price: "$49",
			period: "per month",
			description: "For teams that need comprehensive media intelligence.",
			features: [
				"Unlimited keyword alerts",
				"Real-time notifications",
				"1-year article history",
				"Advanced analytics & reports",
				"Up to 10 users",
				"API access",
				"Custom dashboards",
				"Priority support",
			],
			cta: "Start Free Trial",
			highlighted: true,
		},
		{
			name: "Enterprise",
			price: "Custom",
			period: "tailored pricing",
			description: "For organizations requiring full-scale media intelligence.",
			features: [
				"Everything in Premium",
				"Unlimited users",
				"Dedicated account manager",
				"Custom integrations",
				"SLA guarantee",
				"On-premise deployment option",
				"Advanced security features",
				"Custom training & onboarding",
			],
			cta: "Contact Sales",
			highlighted: false,
		},
	];

	return (
		<div className={pageStyles.page}>
			<div className="container">
				<div className="main">
					<div className={styles.pricingWrapper}>
						<div className={styles.pricingHeader}>
							<h1>Simple, transparent pricing</h1>
							<p>Choose the plan that fits your needs. No hidden fees.</p>
						</div>

						<div className={styles.pricingTable}>
							{plans.map((plan) => (
								<div
									key={plan.name}
									className={`${styles.pricingCard} ${
										plan.highlighted ? styles.highlighted : ""
									}`}
								>
									{plan.highlighted && (
										<div className={styles.badge}>Most Popular</div>
									)}
									<div className={styles.planHeader}>
										<h2 className={styles.planName}>{plan.name}</h2>
										<div className={styles.planPrice}>
											<span className={styles.price}>{plan.price}</span>
											<span className={styles.period}>{plan.period}</span>
										</div>
										<p className={styles.planDescription}>{plan.description}</p>
									</div>

									<ul className={styles.featureList}>
										{plan.features.map((feature, index) => (
											<li key={index} className={styles.featureItem}>
												<svg
													className={styles.checkIcon}
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
												{feature}
											</li>
										))}
									</ul>

									<button
										className={`form-button ${
											plan.highlighted ? "" : "secondary"
										}`}
									>
										{plan.cta}
									</button>
								</div>
							))}
						</div>

						<div className={styles.pricingFooter}>
							<p>
								All plans include a 14-day free trial. No credit card required.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
