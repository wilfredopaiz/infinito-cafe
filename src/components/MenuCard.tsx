import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuCard = ({ item, onClick }: MenuCardProps) => {
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
};

export default MenuCard;
