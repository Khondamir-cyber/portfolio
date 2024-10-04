import './Projects_f.css';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export function Projects_f() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"]
	});

	return (
		<section>
			<div ref={ref}>
				<figure className="progress">
					<svg id="progress" width="75" height="75" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
						<motion.circle
							cx="50"
							cy="50"
							r="30"
							pathLength="1"
							className="indicator"
							style={{ pathLength: scrollYProgress }}
						/>
					</svg>
				</figure>
			</div>
		</section>
	);
}
