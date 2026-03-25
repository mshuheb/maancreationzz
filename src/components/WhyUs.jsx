import Banner from "../assets/banner.png";

export default function WhyUs() {
  return (
    <section id="about" className="why-us-container">
      <h2 className="about-title-overlay">About Us</h2>

      <div className="hero-image-wrapper">
        <img src={Banner} alt="Company Banner" className="hero-image" />
      </div>

      <div className="about-text-container">
        <p className="about-text">
          We are a passionate team specializing in custom printing solutions for
          T-shirts, oversized wear, hoodies, mugs, caps, and more. Our goal is
          simple — to turn your ideas into high-quality, wearable and usable
          products that stand out. With advanced printing technology and a
          strong focus on detail, we ensure every design is printed with
          precision, vibrant colors, and long-lasting quality. Whether it's for
          personal use, gifting, branding, or bulk orders, we deliver products
          that reflect your creativity perfectly. At our core, we believe in
          quality, consistency, and customer satisfaction — making your vision
          our priority.
        </p>
      </div>
    </section>
  );
}
