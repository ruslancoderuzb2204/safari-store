const SideBar = ({ title }) => {
  return (
    <div>
      <h2 className="font-semibold border-b-2 pb-1 border-gray-400 mb-4  text-2xl">
        CATEGORY
      </h2>
      <ul className="categoryUl mt-4">
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Facemask</button>
        </li>
        <li>
          <button>Jewelry</button>
        </li>
        <li>
          <button>Watches</button>
        </li>
        <li>
          <button>Hair accessories</button>
        </li>
        <li>
          <button>Belts</button>
        </li>
        <li>
          <button>Backpacks</button>
        </li>
        <li>
          <button>Handbags</button>
        </li>
        <li>
          <button>Fragrances</button>
        </li>
        <li>
          <button>Sunglasses & eyewears</button>
        </li>
        <li>
          <button>Socks</button>
        </li>
        <li>
          <button>Hats and beanies</button>
        </li>
        <li>
          <button>Gloves</button>
        </li>
      </ul>
      <div className="flex justify-between border-black pb-4 border-b-2">
        <h2 className="text-2xl font-medium">SIZE</h2>
        <div className="flex w-[60px] justify-between items-center">
          <button className="w-[60px] flex items-center justify-between">
            <h3 className="text-[#C4C4C4]">Clear</h3>
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-4 mt-6">
        <li className="p-2 rounded border-2 text-center">XXS</li>
        <li className="p-2 rounded border-2 text-center">XS</li>
        <li className="p-2 rounded border-2 text-center">S</li>
        <li className="p-2 rounded border-2 text-center">M</li>
        <li className="p-2 rounded border-2 text-center">L</li>
        <li className="p-2 rounded border-2 text-center">XL</li>
        <li className="p-2 rounded border-2 text-center">23</li>
        <li className="p-2 rounded border-2 text-center">24</li>
        <li className="p-2 rounded border-2 text-center">25</li>
        <li className="p-2 rounded border-2 text-center">26</li>
        <li className="p-2 rounded border-2 text-center">27</li>
        <li className="p-2 rounded border-2 text-center">28</li>
        <li className="p-2 rounded border-2 text-center">29</li>
        <li className="p-2 rounded border-2 text-center">30</li>
        <li className="p-2 rounded border-2 text-center">31</li>
        <li className="p-2 rounded border-2 text-center">32</li>
      </ul>
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-medium">COLOR</h2>
        <div className="flex w-[60px] justify-between items-center">
          <button className="w-[60px] flex items-center justify-between">
            <h3 className="text-[#C4C4C4]">Clear</h3>
          </button>
        </div>
      </div>
      <span className="w-100 block h-[1px] my-4 bg-gray-400"></span>
      <ul className="grid grid-cols-4 gap-4">
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#F3ECDB] rounded"></span>
          <p>Beige</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#465BA3] rounded"></span>
          <p>Blue</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#000] rounded"></span>
          <p>Black</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#F07B4E] rounded"></span>
          <p>Orange</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#41854D] rounded"></span>
          <p>Green</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#665147] rounded"></span>
          <p>Brown</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#893D88] rounded"></span>
          <p>Purple</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 gold h-8 bg-[#CAC1B8] rounded"></span>
          <p>Gold</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#CAC1B8] rounded"></span>
          <p>Taupe</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 border border-black bg-[#FFF] rounded"></span>
          <p>White</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#F2A1B1] rounded"></span>
          <p>Pink</p>
        </li>
        <li className="flex items-center gap-1">
          <span className="w-8 h-8 bg-[#D23C47] rounded"></span>
          <p>Red</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
