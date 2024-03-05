"use client";
import PaginationPage from "@/components/pagination";
import Products from "@/containers/products";
import SideBar from "@/containers/sideBar";
import { accessoriesData } from "@/data";
import { useSearchContext } from "@/context/searchContext";
import { useState } from "react";

const Accessories = () => {
  const { searchValue } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Popular"); 
  const itemsPerPage = 6;

  const filteredData = accessoriesData
    .filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
      if (selectedOption === "Popular") {
        return a.id - b.id;
      } else if (selectedOption === "Best Selling") {
        return b.id - a.id;
      } else {
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
        <h1 className="text-4xl mb-6 font-semibold">Accessories</h1>
        <div className="flex items-start gap-10">
          <div className="w-1/3">
            <SideBar title="Accessories" />
          </div>
          <div>
            <div className="pb-3 mb-4 flex justify-end border-b-2 border-gray-400">
              <select
                name="Select"
                id=""
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="Popular">Most Popular</option>
                <option value="Best Selling">Best Selling</option>
                {/* Add other sorting options as needed */}
              </select>
            </div>
            <Products
              gridColStyle="grid-cols-3"
              data={filteredData.slice(startIndex, endIndex)}
            />
          </div>
        </div>
        <PaginationPage
          data={filteredData}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Accessories;
