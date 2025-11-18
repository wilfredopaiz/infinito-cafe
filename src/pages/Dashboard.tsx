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
import { Plus, Pencil, Trash2, LogOut, Coffee, FolderOpen } from "lucide-react";
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

const initialCategories = ["BRUNCH", "BEBIDAS", "TOSTADAS", "BAGELS", "BOWLS", "ENSALADAS", "LUNCH BOWLS"];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<DemoProduct[]>(initialProducts);
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<DemoProduct | null>(null);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentView, setCurrentView] = useState<"products" | "categories">("products");
  const [newCategoryName, setNewCategoryName] = useState("");

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

  const openCreateCategoryModal = () => {
    setEditingCategory(null);
    setNewCategoryName("");
    setIsCategoryModalOpen(true);
  };

  const openEditCategoryModal = (category: string) => {
    setEditingCategory(category);
    setNewCategoryName(category);
    setIsCategoryModalOpen(true);
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCategory) {
      setCategories(categories.map(c => c === editingCategory ? newCategoryName : c));
      setProducts(products.map(p => 
        p.category === editingCategory ? { ...p, category: newCategoryName } : p
      ));
      toast({
        title: "Categoría actualizada",
        description: "La categoría se ha modificado correctamente.",
      });
    } else {
      if (categories.includes(newCategoryName)) {
        toast({
          title: "Error",
          description: "Esta categoría ya existe.",
          variant: "destructive",
        });
        return;
      }
      setCategories([...categories, newCategoryName]);
      toast({
        title: "Categoría creada",
        description: "La nueva categoría se ha agregado.",
      });
    }
    
    setIsCategoryModalOpen(false);
  };

  const handleDeleteCategory = (category: string) => {
    const productsInCategory = products.filter(p => p.category === category).length;
    
    if (productsInCategory > 0) {
      toast({
        title: "No se puede eliminar",
        description: `Hay ${productsInCategory} producto(s) en esta categoría. Elimínalos primero.`,
        variant: "destructive",
      });
      return;
    }
    
    setCategories(categories.filter(c => c !== category));
    toast({
      title: "Categoría eliminada",
      description: "La categoría se ha eliminado correctamente.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-infinito-black shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-infinito-red" />
            <h1 className="text-lg md:text-xl font-bold text-infinito-white">Panel Admin</h1>
          </div>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-infinito-red hover:bg-infinito-red/10 hover:text-infinito-red"
          >
            <LogOut className="mr-0 md:mr-2 h-4 w-4" />
            <span className="hidden md:inline">Cerrar Sesión</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 flex flex-col sm:flex-row gap-2">
          <Button
            variant={currentView === "products" ? "default" : "outline"}
            onClick={() => setCurrentView("products")}
            className={currentView === "products" ? "bg-infinito-red hover:bg-infinito-red/90" : ""}
          >
            <Coffee className="mr-2 h-4 w-4" />
            Productos
          </Button>
          <Button
            variant={currentView === "categories" ? "default" : "outline"}
            onClick={() => setCurrentView("categories")}
            className={currentView === "categories" ? "bg-infinito-red hover:bg-infinito-red/90" : ""}
          >
            <FolderOpen className="mr-2 h-4 w-4" />
            Categorías
          </Button>
        </div>

        {currentView === "products" ? (
          <>
            <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Gestión de Productos</h2>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  Dashboard de demostración - Los cambios no afectan la carta pública
                </p>
              </div>
              <Button
                onClick={openCreateModal}
                className="bg-infinito-red hover:bg-infinito-red/90 text-infinito-white w-full md:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Producto
              </Button>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
              <TabsList className="bg-secondary/50 flex-wrap h-auto">
                <TabsTrigger value="all">Todos</TabsTrigger>
                {categories.map(cat => (
                  <TabsTrigger key={cat} value={cat} className="text-xs md:text-sm">{cat}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base md:text-lg truncate">{product.name}</CardTitle>
                        <CardDescription className="mt-1 text-xs md:text-sm">{product.category}</CardDescription>
                      </div>
                      <span className="text-lg md:text-xl font-bold text-infinito-red whitespace-nowrap">{product.price}€</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <div className="bg-secondary/50 p-2 rounded text-xs">
                      <strong>Alérgenos:</strong> {product.allergens}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditModal(product)}
                      className="flex-1 text-xs md:text-sm"
                    >
                      <Pencil className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      className="flex-1 text-xs md:text-sm"
                    >
                      <Trash2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Eliminar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-base md:text-lg">No hay productos en esta categoría</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Gestión de Categorías</h2>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  Administra las categorías de tu menú
                </p>
              </div>
              <Button
                onClick={openCreateCategoryModal}
                className="bg-infinito-red hover:bg-infinito-red/90 text-infinito-white w-full md:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Nueva Categoría
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {categories.map((category) => {
                const productCount = products.filter(p => p.category === category).length;
                return (
                  <Card key={category} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{category}</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        {productCount} producto{productCount !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditCategoryModal(category)}
                        className="flex-1 text-xs md:text-sm"
                      >
                        <Pencil className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Editar
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteCategory(category)}
                        className="flex-1 text-xs md:text-sm"
                        disabled={productCount > 0}
                      >
                        <Trash2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Eliminar
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">
              {editingProduct ? "Editar Producto" : "Nuevo Producto"}
            </DialogTitle>
            <DialogDescription className="text-sm md:text-base">
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

      <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">
              {editingCategory ? "Editar Categoría" : "Nueva Categoría"}
            </DialogTitle>
            <DialogDescription className="text-sm md:text-base">
              {editingCategory 
                ? "Modifica el nombre de la categoría" 
                : "Ingresa el nombre de la nueva categoría"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCategorySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="categoryName">Nombre de la Categoría</Label>
              <Input
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value.toUpperCase())}
                placeholder="Ej: BEBIDAS"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCategoryModalOpen(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-infinito-red hover:bg-infinito-red/90 text-infinito-white"
              >
                {editingCategory ? "Guardar Cambios" : "Crear Categoría"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
