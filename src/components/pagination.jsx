"use client";
import { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { ArrowUpward } from "@mui/icons-material";

const PaginationPage = ({ data, itemsPerPage, onPageChange }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <div className="flex justify-around items-center">
      <Pagination
        className="my-10"
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component="div"
            className="text-xl"
            {...item}
            icon={
              (item.type === "previous" && <ArrowBackIcon />) ||
              (item.type === "next" && <ArrowForwardIcon />)
            }
          />
        )}
      />
      <Link className="text-6xl scale-150" href="#header">
        <ArrowUpward />
      </Link>
    </div>
  );
};

export default PaginationPage;
