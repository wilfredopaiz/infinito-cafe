import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MenuItem } from "@/data/menuData";

interface MenuModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ item, isOpen, onClose }: MenuModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-semibold text-lg mb-2 text-foreground">Ingredientes</h4>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-3xl font-bold text-infinito-red">{item.price}€</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              <strong>Alérgenos:</strong> Consultar en local
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
