import { Card, CardContent } from "@/components/ui/card";

interface ProductGalleryProps {
  products: Array<{
    icon: string;
    name: string;
    sizes: string;
  }>;
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="product-gallery">
      {products.map((product, index) => (
        <Card 
          key={index} 
          className="hover:shadow-md transition-shadow"
          data-testid={`product-card-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <CardContent className="text-center p-4">
            <i className={`${product.icon} text-accent text-2xl mb-2`}></i>
            <h4 className="font-semibold mb-2">{product.name}</h4>
            <p className="text-sm text-muted-foreground">{product.sizes}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
