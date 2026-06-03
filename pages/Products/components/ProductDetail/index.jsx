import { motion } from "framer-motion";

import "./ProductDetail.styles.css";

import redModel from "../../../../assets/images/red-model.jpg";
import redModel2 from "../../../../assets/images/red-model2.jpg";
import dryventImage from "../../../../assets/images/dryvent.jpg";

function ProductDetail() {
  return (
    <section
      className="tech-section"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.25)
          ),
          url(${redModel})
        `,
      }}
    >
      <div className="tech-content">
        <motion.div
        className="tech-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{
            duration: 0.9,
            ease: "easeOut",
        }}
        >
        <img src={redModel2} alt="model" />
        </motion.div>

        <motion.div
        className="tech-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
        }}
        >
          <img src={dryventImage} alt="dryvent" />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductDetail;