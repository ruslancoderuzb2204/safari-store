"use client";
import PaginationPage from "@/components/pagination";
import Products from "@/containers/products";
import SideBar from "@/containers/sideBar";
import { shoesData } from "@/data";
import { useSearchContext } from "@/context/searchContext";
import { useState } from "react";

const Shoes = () => {
  const { searchValue } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Popular"); // Default selected option
  const itemsPerPage = 6;

  const filteredData = searchValue
    ? shoesData.filter((item) =>
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      )
    : shoesData;

  const sortedData = filteredData.slice().sort((a, b) => {
    switch (selectedOption) {
      case "all":
        return filteredData;
      case "Popular":
        return a.id - b.id;
      case "Newest":
        return b.id - a.id;
      case "PriceHighToLow":
        return b.price - a.price;
      case "PriceLowToHigh":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="flex container justify-center">
      <div>
        <h1 className="text-4xl mb-6 font-semibold">Shoes</h1>
        <div className="flex items-start gap-10">
          <div className="w-1/3">
            <SideBar />
          </div>
          <div>
            <div className="pb-3 mb-4 flex justify-end border-b-2 border-gray-400">
              <select name="Select" id="select" onChange={handleSelectChange}>
                <option defaultChecked defaultValue={"all"} value="all">
                  Sorted By:
                </option>
                <option value="Popular">Most Popular</option>
                <option value="Newest">Newest</option>
                <option value="PriceHighToLow">Price: High to Low</option>
                <option value="PriceLowToHigh">Price: Low to High</option>
              </select>
            </div>
            <Products
              gridColStyle="grid-cols-3"
              data={sortedData.slice(startIndex, endIndex)}
            />
          </div>
        </div>
        <PaginationPage
          data={sortedData}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Shoes;
