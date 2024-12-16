const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white p-5 shadow-lg">
      <h2 className="text-lg font-bold">Shoes</h2>
      <ul className="mt-4 space-y-2">
        <li>Sports Bras</li>
        <li>Tops & T-Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets</li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & Rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Accessories & Equipment</li>
      </ul>

      {/* Filters */}
      <div className="mt-8">
        <h3 className="font-semibold">Gender</h3>
        <div className="flex flex-col mt-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Men
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Women
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Unisex
          </label>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">Kids</h3>
        <div className="flex flex-col mt-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Boys
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Girls
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
