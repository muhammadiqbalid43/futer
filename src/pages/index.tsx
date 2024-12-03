import FeaturedProduct from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/featured-products";
import { customFetch } from "@/utils";
import { COLLECTION } from "@/utils/constant";
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

      {/* COLLECTION */}
      <div className=" w-full h-[630px] mb-16">
        <div className="container mx-auto flex gap-4">
          <div className="w-full h-[616px] relative">
            <Image
              src={COLLECTION[1].bed!}
              fill
              quality={100}
              alt="collection-1"
              placeholder="empty"
              className="object-cover w-full rounded-sm"
            />
            <div className="absolute inset-0 bg-colorblack opacity-30 z-10 rounded-sm"></div>
            <div className="relative z-20 px-4 text-white text-center  h-[616px]">
              <p className="absolute bottom-8 text-2xl text-left">
                Our Beds Collection: Your Sleep Space with <br />
                Comport and Style
              </p>
            </div>
          </div>
          <div className="w-full h-[616px] ">
            <div className="w-full h-[47%] relative mb-4">
              <Image
                src={COLLECTION[0].sofa!}
                fill
                quality={100}
                alt="collection-2"
                className="object-cover w-full h-[50%] rounded-sm"
              />
              <div className="absolute inset-0 bg-colorblack opacity-30 z-10 rounded-sm"></div>
              <div className="relative z-20 px-4 text-white text-center h-[290px]">
                <p className="absolute bottom-8 text-2xl text-left">
                  Browse Our Sofas Collection
                </p>
              </div>
            </div>
            <div className="w-full h-[50%]  flex gap-4">
              <div className="relative w-[50%]">
                <Image
                  src={COLLECTION[2].table!}
                  fill
                  quality={100}
                  alt="collection-2"
                  className="object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-colorblack opacity-30 z-10 rounded-sm"></div>
                <div className="relative z-20 px-4 text-white text-center h-[305px] ">
                  <p className="absolute bottom-8 text-2xl text-left">
                    Our Table Collection
                  </p>
                </div>
              </div>
              <div className="relative w-[50%]">
                <Image
                  src={COLLECTION[3].chair!}
                  fill
                  quality={100}
                  alt="collection-2"
                  className="object-cover w-full h-[50%] rounded-sm"
                />
                <div className="absolute inset-0 bg-colorblack opacity-30 z-10 rounded-sm"></div>
                <div className="relative z-20 px-4 text-white text-center h-[305px] ">
                  <p className="absolute bottom-8 text-2xl text-left">
                    Our Chair Collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] mb-24">
        <div className="container h-full mx-auto py-14 relative">
          <Image
            src={COLLECTION[0].sofa!}
            fill
            quality={100}
            alt="collection-2"
            className="object-cover w-full h-[50%] rounded-sm"
          />
          <div className="absolute inset-0 bg-colorblack opacity-20 z-10 rounded-sm"></div>
          <div className="relative z-20 px-4 text-white text-center h-[290px]">
            <h1 className="text-5xl font-semibold mb-8  ">
              Craft Your{" "}
              <a className="underline decoration-coloryellow">Ideal</a>{" "}
              Furniture Masterpieces Today
            </h1>
            <p className="text-md max-w-2xl mx-auto mb-8">
              Whether it&apos;s a sleek wooden chair, a plush sofa, or a
              functional table with drawers, our platform offers endless
              possibilities, Start crafting your dream furniture now and bring
              vision to life!
            </p>
            <Button variant="defaultyellow" size="lg">
              Pre-Order Now
            </Button>
          </div>
        </div>
      </div>
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
