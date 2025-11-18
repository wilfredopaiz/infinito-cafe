import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, LogOut, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  allergens: string;
  image: string;
}

const initialProducts: DemoProduct[] = [
  {
    id: "1",
    name: "French Brioche de Bacon & Aguacate",
    price: "14,95",
    description: "Bacon, aguacate, hash brown, huevo poché, salsa holandesa.",
    category: "BRUNCH",
    allergens: "Gluten, Huevo, Lácteos",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "2",
    name: "Cappuccino Premium",
    price: "3,50",
    description: "Café espresso doble con leche vaporizada y espuma cremosa.",
    category: "BEBIDAS",
    allergens: "Lácteos",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    id: "3",
    name: "Açaí Bowl",
    price: "10,95",
    description: "Açaí casero, frutas del día, granola bio, chia, goji, coco.",
    category: "BOWLS",
    allergens: "Frutos secos, Semillas",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },
];

const categories = ["BRUNCH", "BEBIDAS", "TOSTADAS", "BAGELS", "BOWLS", "ENSALADAS", "LUNCH BOWLS"];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<DemoProduct[]>(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<DemoProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    allergens: "",
    image: "",
  });

  const handleLogout = () => {
    navigate("/");
  };

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
      allergens: "",
      image: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: DemoProduct) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      allergens: product.allergens,
      image: product.image,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Editar producto existente
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...editingProduct, ...formData }
          : p
      ));
      toast({
        title: "Producto actualizado",
        description: "Los cambios se han guardado correctamente.",
      });
    } else {
      // Crear nuevo producto
      const newProduct: DemoProduct = {
        id: Date.now().toString(),
        ...formData,
      };
      setProducts([...products, newProduct]);
      toast({
        title: "Producto creado",
        description: "El nuevo producto se ha agregado a la carta.",
      });
    }
    
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Producto eliminado",
      description: "El producto se ha eliminado de la carta.",
      variant: "destructive",
    });
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-infinito-black shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-infinito-red" />
            <h1 className="text-xl font-bold text-infinito-white">Panel de Administración</h1>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-infinito-red text-infinito-white hover:bg-infinito-red hover:text-infinito-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Gestión de Productos</h2>
            <p className="text-muted-foreground mt-1">
              Dashboard de demostración - Los cambios no afectan la carta pública
            </p>
          </div>
          <Button
            onClick={openCreateModal}
            className="bg-infinito-red hover:bg-infinito-red/90 text-infinito-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Producto
          </Button>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="all">Todos</TabsTrigger>
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="mt-1">{product.category}</CardDescription>
                  </div>
                  <span className="text-xl font-bold text-infinito-red">{product.price}€</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="bg-secondary/50 p-2 rounded text-xs">
                  <strong>Alérgenos:</strong> {product.allergens}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditModal(product)}
                  className="flex-1"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  className="flex-1"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No hay productos en esta categoría</p>
          </div>
        )}
      </main>

      {/* Create/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Editar Producto" : "Nuevo Producto"}
            </DialogTitle>
            <DialogDescription>
              {editingProduct 
                ? "Modifica los datos del producto" 
                : "Completa la información del nuevo producto"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Producto</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Cappuccino Premium"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Precio (€)</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Ej: 3,50"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción / Ingredientes</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe los ingredientes del producto..."
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergens">Alérgenos</Label>
              <Input
                id="allergens"
                value={formData.allergens}
                onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
                placeholder="Ej: Gluten, Lácteos, Frutos secos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL de Imagen</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
                type="url"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-infinito-red hover:bg-infinito-red/90 text-infinito-white"
              >
                {editingProduct ? "Guardar Cambios" : "Crear Producto"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
