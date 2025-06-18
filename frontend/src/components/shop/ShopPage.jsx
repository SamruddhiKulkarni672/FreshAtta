import ProductGrid from "@/components/shop/ProductGrid";
import SectionTitle from "@/components/shop/SectionTitle";
import PromoBanner from "@/components/shop/PromoBanner";
import CategoryGrid from "@/components/shop/CategoryGrid";
import FilterSidebar from "@/components/shop/FilterSidebar";
const products = [
  {
    image: "/images/aata1.svg",
    title: "Fresh Organic Tomatoes",
    price: 2.99,
    oldPrice: 3.99,
    rating: 4.5,
  },
  {
    image: "/images/aata2.svg",
    title: "Premium Red Apples",
    price: 4.99,
    oldPrice: 5.99,
    rating: 4.8,
  },
  {
    image: "/images/aata3.svg",
    title: "Fresh Green Spinach",
    price: 1.99,
    oldPrice: 2.49,
    rating: 4.3,
  },
  {
    image: "/images/aata4.svg",
    title: "Organic Carrots Bundle",
    price: 2.49,
    oldPrice: 2.99,
    rating: 4.6,
  },
];

const categories = [
  { image: "/images/aata1.svg", title: "Vegetables" },
  { image: "/images/aata2.svg", title: "Fruits" },
  { image: "/images/aata3.svg", title: "Leafy Greens" },
  { image: "/images/aata4.svg", title: "Bundles" },
];

const HomePage = () => {
  return (
   <div className="flex flex-col md:flex-row gap-8">
  <FilterSidebar />
    <div className="flex-1">
       <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-20 space-y-12">
      <PromoBanner
        title="Fresh Deals Everyday"
        subtitle="Get your groceries delivered fresh and fast."
        cta="Shop Now"
      />

      <div>
        <SectionTitle title="Shop by Category" />
        <CategoryGrid categories={categories} />
      </div>

      <div>
        <SectionTitle title="Top Products" />
        <ProductGrid products={products} />
      </div>
    </main>
      </div>

   </div>


    
  );
};

export default HomePage;
