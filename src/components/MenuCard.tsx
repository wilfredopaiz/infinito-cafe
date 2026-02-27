import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
  showImages?: boolean;
}

const MenuCard = ({ item, onClick, showImages = false }: MenuCardProps) => {
  if (showImages) {
    // Modo con imágenes: tarjetas visuales
    return (
      <Card
        className="cursor-pointer hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden group bg-card border-border"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-infinito-black/0 group-hover:bg-infinito-black/20 transition-colors duration-300" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-foreground">{item.name}</h3>
          <p className="text-infinito-red font-bold text-xl">{item.price}€</p>
        </CardContent>
      </Card>
    );
  }

  // Modo sin imágenes: fila estilo carta española
  return (
    <button
      onClick={onClick}
      className="w-full text-left group flex items-baseline gap-3 py-3 px-1 border-b border-border/50 hover:border-infinito-red/40 transition-colors duration-200 last:border-b-0"
    >
      <div className="flex-1 min-w-0">
        <span className="font-medium text-foreground group-hover:text-infinito-red transition-colors duration-200 leading-snug">
          {item.name}
        </span>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
      {/* Línea de puntos decorativa */}
      <span
        className="flex-shrink-0 w-16 border-b border-dashed border-border/60 mb-1.5 hidden sm:block"
        aria-hidden="true"
      />
      <span className="flex-shrink-0 font-bold text-infinito-red tabular-nums whitespace-nowrap">
        {item.price}€
      </span>
    </button>
  );
};

export default MenuCard;
