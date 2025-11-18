const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      alt: "Café artesanal",
    },
    {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      alt: "Brunch premium",
    },
    {
      url: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
      alt: "Açaí bowl",
    },
    {
      url: "https://images.unsplash.com/photo-1551106652-a5bcf4b29e84?w=800&q=80",
      alt: "Bagels frescos",
    },
    {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      alt: "Ensalada fresca",
    },
    {
      url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
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
