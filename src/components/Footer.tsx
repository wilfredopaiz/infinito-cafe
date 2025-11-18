const Footer = () => {
  return (
    <footer className="bg-infinito-black text-infinito-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Infinito Café</h3>
          <p className="text-infinito-white/80">
            Brunch • Café • Fresh Bowls • Bagels
          </p>
          <div className="pt-4 border-t border-infinito-white/20">
            <p className="text-sm text-infinito-white/60">
              © {new Date().getFullYear()} Infinito Café. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
