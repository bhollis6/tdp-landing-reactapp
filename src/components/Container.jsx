import Form from "./Form";

export default function Container() {
	return (
		<div className="Container-grid">
			<div className="Container-title">
				3 STEPS TO BEGIN LEADING CHANGE LIKE A GENIUS
			</div>
			<div className="Container-paragraph1">
				Your organization has just decided to roll out new technology.
				Simple enough, right? Many organizations make the mistake of
				assuming their employees will “...just adapt to the new system
				after they get used to it.” Benchmark data from Prosci shows
				that the{" "}
				<b>
					number one contributor to success during change is active
					and visible sponsorship
				</b>
				. That means, your leaders must be aligned and working in their
				zone of genius to successfully lead organizational change.
			</div>
			<div className="Container-paragraph2">
				Sound daunting? Don’t worry, we’ve got you! We’ve put together 3
				steps to begin leading change like a genius. Complete the form
				below and we’ll send you a checklist to get you on your way.{" "}
			</div>
			<div className="Container-form">
				<div className="Container-form-text">
					Complete the information below to get your FREE copy!
				</div>
				<Form />
			</div>
			<div className="Container-link">
				<a
					href="https://www.thedeltaprinciple.com"
					target="_blank"
					rel="noopener"
					className="TDP-link"
				>
					www.thedeltaprinciple.com
				</a>
			</div>
		</div>
	);
}
