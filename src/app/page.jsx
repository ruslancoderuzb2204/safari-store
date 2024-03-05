"use client";
import { useState, useEffect, useMemo } from "react";
import Products from "../containers/products";
import PaginationPage from "@/components/pagination";
import { homeData } from "@/data";
import { images } from "@/data";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useSearchContext } from "@/context/searchContext";

const Home = () => {
  const { searchValue } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [index, setIndex] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredData = useMemo(() => {
    return searchValue
      ? homeData.filter((item) =>
          item.description.toLowerCase().includes(searchValue.toLowerCase())
        )
      : homeData;
  }, [searchValue]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData, itemsPerPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="flex  flex-col items-center justify-center">
      <Carousel
        index={index}
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        onChange={(newIndex) => setIndex(newIndex)}
        className="w-full flex justify-center items-center mx-auto bg-[#ED165F]"
      >
        {images &&
          images.map((image) => (
            <Image
              key={image.id}
              src={image.logo}
              alt={`Slide ${image.id + 1}`}
              width={1000}
              height={1000}
              className="w-[600px] mx-auto flex justify-center slider h-[600px]"
            />
          ))}
      </Carousel>

      <div className="mt-8">
        <Products data={paginatedData} />
        <PaginationPage
          data={filteredData}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
