import FeaturedProduct from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/featured-products";
import { customFetch } from "@/utils";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

interface HomePageProps {
  products: Product[];
}

export default function Home({ products }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Futer</title>
      </Head>
      {/* Hero */}
      <div className="relative w-full h-[600px] flex items-center ">
        <Image
          src="/hero1.webp"
          alt="Hero Background"
          fill
          quality={100}
          className="absolute inset-0 -z-40 object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-colorblack opacity-50 z-10"></div>

        {/* content */}
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-7xl  font-bold mb-8  ">
            Discover Comport, Style, and{" "}
            <a className="underline decoration-coloryellow">Quality</a>{" "}
            Craftsmanship
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our furniture embodies a perfect brand and aesthic appeal, ensuring
            piece enhances you home with enduring elegance and superior
            durability
          </p>
          <Button variant="defaultyellow" size="lg">
            Explore Products
          </Button>
        </div>
      </div>

      {/* About */}
      <div className="w-full h-auto">
        <div className="container mx-auto py-[130px]">
          <p className="text-3xl text-center ">
            &quot;We Believe{" "}
            <a className="underline decoration-coloryellow">quality</a>{" "}
            furniture is key to a beautiful, functional home. With a passion for{" "}
            <a className="underline decoration-coloryellow">design</a> and{" "}
            <a className="underline decoration-coloryellow">craftsmanship,</a>
            we blend modern aesthetic with timeless elegance&quot;
          </p>
        </div>
      </div>

      {/* Customers */}
      <div className="w-full h-auto border-t ">
        <div className="container mx-auto flex p-12 gap-12">
          <div>
            <h1 className="font-bold text-7xl">10+</h1>
            <p className="text-sm text-colorgray">
              With a decade of expertise, Futer crafts high-quality, bespoke
              furniture that blends style and functionality
            </p>
          </div>
          <div>
            {" "}
            <h1 className="font-bold text-7xl">800+</h1>
            <p className="text-sm text-colorgray">
              Our commitment to customer satisfaction ensures we deliver
              outstanding service and products that exceed expectations
            </p>
          </div>
          <div>
            <h1 className="font-bold text-7xl">1200+</h1>
            <p className="text-sm text-colorgray">
              Futer has crafted over 1200 unique furniture pieces, from elagant
              sofas to functional cabinets, with precision and cave
            </p>
          </div>
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            src="/hero2.webp"
            alt="customer Background"
            fill
            quality={100}
            className=" z-50 object-cover"
          />
        </div>
      </div>

      <FeaturedProduct featuredProducts={products} />
    </>
  );
}

// Fetch featured products with ISR
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await customFetch.get<{ data: Product[] }>(
      "/products?featured=true"
    );

    return {
      props: {
        products: data.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};
