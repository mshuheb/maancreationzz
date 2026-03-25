import tshirt from "../assets/tshirt.png";
import hoodie from "../assets/hoodie.png";
import mug from "../assets/mug.png";
import corporate from "../assets/corporate.png";

const services = [
  {
    title: "Customized T-shirts",
    subtitle: "Wear your brand proudly",
    image: tshirt,
  },
  {
    title: "Customized Hoodies",
    subtitle: "Comfort meets bold style",
    image: hoodie,
  },
  {
    title: "Mugs",
    subtitle: "Sip with personal touch",
    image: mug,
  },
  {
    title: "Corporate Gifting",
    subtitle: "Impress clients with style",
    image: corporate,
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      {/* 🔥 BIG HEADER */}
      <div className="services-header">
        <h1>
          Customize T-Shirts, Hoodies & Merchandise <br />
          <span>for Your Team & Brand</span>
        </h1>
        <p>High-quality printing solutions tailored for your needs</p>
      </div>

      {/* Cards */}
      <div className="grid">
        {services.map((item, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
