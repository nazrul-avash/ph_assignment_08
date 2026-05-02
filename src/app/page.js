import ProductGrid from "@/components/ProductGrid";
import Slider from "@/components/Slider";
import Tips from "@/components/Tips";
import TopBrands from "@/components/TopBrands";

import Image from "next/image";


export default function Home() {
  return (
    <>
      <Slider></Slider>
      <ProductGrid></ProductGrid>
      <Tips></Tips>
      <TopBrands></TopBrands>
      
    </>
  );
}
