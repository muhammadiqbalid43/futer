import { Product } from "@/types/featured-products";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface HomePageProps {
  featuredProducts: Product[];
}

export default function FeaturedProduct({ featuredProducts }: HomePageProps) {
  return (
    <div className="w-full  h-[600px] py-14 mb-14">
      <div className="container mx-auto h-[500px]">
        <h1 className="text-5xl mb-8">Furniture by Futer</h1>
        <div className="flex gap-10 justify-center ">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="bg-colorterang">
              <Link href="#">
                <Image
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  width={300}
                  height={300}
                  className="object-cover h-[300px] w-[300px] rounded-t"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">
                    {product.attributes.title}
                  </h2>
                  <p className="text-gray-600">{product.attributes.company}</p>
                  <p className="text-lg font-bold mt-2">
                    ${Number(product.attributes.price)}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
