import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";
import { menuItems, menuCategories, MenuItem } from "@/data/menuData";

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section id="carta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nuestra Carta</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de platos frescos y sabores únicos
          </p>
        </div>

        <Tabs defaultValue={menuCategories[0]} className="w-full">
          <div className="sticky top-16 z-40 bg-background pb-4 -mt-4 pt-4">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-secondary/50 p-2 rounded-lg h-auto">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-infinito-red data-[state=active]:text-infinito-white px-4 py-2 rounded-md transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category} value={category} className="fade-in mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onClick={() => handleCardClick(item)}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <MenuModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default MenuSection;
