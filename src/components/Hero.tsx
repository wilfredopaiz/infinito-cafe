import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-brunch.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-infinito-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-infinito-white mb-4 tracking-tight">
          Infinito Café
        </h1>
        <p className="text-xl md:text-2xl text-infinito-white/90 mb-6 font-light">
          Specialty Coffee • Brunch • Fresh Bowls • Bagels
        </p>
        <p className="text-lg md:text-xl text-infinito-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Inspirados en sabores asiáticos, nos dedicamos a traeros un brunch mediterráneo con un toque diferente.
        </p>
        <Button
          onClick={() => navigate("/carta")}
          size="lg"
          className="bg-infinito-red hover:bg-infinito-red/90 text-infinito-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
        >
          Ver Carta
        </Button>
      </div>
    </section>
  );
};

export default Hero;
