import gal1 from "../assets/galeria-1.jpg";
import gal2 from "../assets/galeria-2.jpg";
import gal3 from "../assets/galeria-3.jpg";
import gal4 from "../assets/galeria-4.jpg";
import gal5 from "../assets/galeria-5.jpg";
import gal6 from "../assets/galeria-6.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      url: gal1,
      alt: "Café artesanal",
    },
    {
      url: gal2,
      alt: "Brunch premium",
    },
    {
      url: gal3,
      alt: "Açaí bowl",
    },
    {
      url: gal4,
      alt: "Bagels frescos",
    },
    {
      url: gal5,
      alt: "Ensalada fresca",
    },
    {
      url: gal6,
      alt: "Tostadas gourmet",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Galería</h2>
          <p className="text-lg text-muted-foreground">
            Un vistazo a nuestros platos y ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-infinito-red/0 group-hover:bg-infinito-red/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
