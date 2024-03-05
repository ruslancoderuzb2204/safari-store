import { Logo } from "../constants/index";
import { FaCartArrowDown, FaHeart, FaSearch, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useSearchContext } from "@/context/searchContext";

const Header = () => {
  const { handleInputChange } = useSearchContext();

  return (
    <header className=" ">
      <div
        id="header"
        className="scroll-smooth flex items-center justify-around mb-10"
      >
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/clothes">Clothes</Link>
          </li>
          <li>
            <Link href="/shoes">Shoes</Link>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
          </li>
        </ul>
        <div>
          <Link href="/">
            <Image src={Logo} alt="img" width={100} height={100} />
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-3">
            <TextField
              variant="standard"
              label="Search..."
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <FaSearch />
          </div>
          <ul className="flex gap-2">
            <li>
              <FaUser />
            </li>
            <li>
              <FaCartArrowDown />
            </li>
            <li>
              <FaHeart />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
