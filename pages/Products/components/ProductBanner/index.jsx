import "./ProductBanner.styles.css";

import techBanner from "../../../../assets/images/tech-banner.jpg";

function ProductBanner() {
  return (
    <section className="technology-banner">
      <img src={techBanner} alt="THE NORTH FACE Technology" />
    </section>
  );
}

export default ProductBanner;