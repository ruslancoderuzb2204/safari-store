"use client";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const { description, id, price, image } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsFavorite(false);
  }, []);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };
  const handleLike = () => {
    if (!localStorage.getItem("token")) {
      router.push("/profile/login");
    }
    setIsFavorite(!isFavorite);
  };
  const addToCart = ()=>{
    if (!localStorage.getItem("token")) {
      router.push("/profile/login");
    }
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-4 border-2 rounded-md relative hover:bg-[#e6dfdf] hover:shadow-2xl"
    >
      <div>
        <Image
          width={200}
          height={200}
          className="w-full h-96 object-contain"
          src={image}
          alt=""
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <button
              onClick={handleLike}
              id={`likeButton_${id}`}
              className="p-2 rounded bg-white"
            >
              {isFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
            </button>
            <button
            
              className="bg-white rounded mt-2 p-2"
              id={`cartButton_${id}`}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      <h2 className="text-center my-4">{description}</h2>
      <p className="text-center font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
