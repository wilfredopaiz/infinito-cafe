import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";
import { menuItems, menuCategories, MenuItem } from "@/data/menuData";

const NAVBAR_HEIGHT = 64;

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [stickyHeight, setStickyHeight] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuStartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (stickyRef.current) {
        const measured = stickyRef.current.getBoundingClientRect().height;
        setStickyHeight((prev) => (measured > prev ? measured : prev));
      }
    };

    measure();
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${NAVBAR_HEIGHT + stickyHeight}px 0px 0px 0px`,
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [stickyHeight]);

  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    // Keep the user at the start of the menu when switching categories.
    if (menuStartRef.current) {
      menuStartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

        <div ref={menuStartRef} className="h-px" />

        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
          {/* Sentinel element to detect when menu becomes sticky */}
          <div ref={sentinelRef} className="h-px" />
          
          <div
            ref={stickyRef}
            className={`sticky top-16 z-40 bg-background transition-all ${isStuck ? '-mx-4 px-0' : 'pb-4 -mt-4 pt-4'}`}
          >
            {isStuck ? (
              // Horizontal scrollable menu when stuck (mobile)
              <ScrollArea className="w-full">
                <TabsList className="w-max flex flex-nowrap justify-start gap-2 bg-secondary/50 p-2 h-auto md:w-full md:justify-center">
                  {menuCategories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:bg-infinito-red data-[state=active]:text-infinito-white px-4 py-2 rounded-md transition-all whitespace-nowrap"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            ) : (
              // Normal wrapped menu when not stuck
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
            )}
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
