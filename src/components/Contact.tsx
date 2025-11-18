import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contacto</h2>
          <p className="text-lg text-muted-foreground">
            Ven a visitarnos y disfruta de la mejor experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4259842684844!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1sen!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infinito Café Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-infinito-red mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Dirección</h3>
                <p className="text-muted-foreground">
                  Calle del Brunch, 123
                  <br />
                  28001 Madrid, España
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-infinito-red mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Horarios</h3>
                <p className="text-muted-foreground">
                  Lunes - Viernes: 8:00 - 17:00
                  <br />
                  Sábado - Domingo: 9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-infinito-red mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Teléfono</h3>
                <a
                  href="tel:+34912345678"
                  className="text-muted-foreground hover:text-infinito-red transition-colors"
                >
                  +34 912 345 678
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-infinito-red hover:bg-infinito-red/90 text-infinito-white rounded-full px-6"
              >
                <a
                  href="https://instagram.com/infinitocafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Instagram size={20} />
                  <span>Síguenos en Instagram</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
