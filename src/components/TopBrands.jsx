import React from 'react';

const TopBrands = () => {
    return (
      <section className="bg-[#FF9A3C]/60 py-10 px-6 rounded-2xl max-w-4xl mx-auto my-10 shadow-sm">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
         Top Brands
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {/* Brand 1 */}
        <div className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition">
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f576.svg"
            alt="SunShade"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-lg">SunShade</h3>
          <p className="text-sm text-gray-500 mt-1">Premium eyewear</p>
        </div>

        {/* Brand 2 */}
        <div className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/96/cosmetic-brush.png"
            alt="GlowCare"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-lg">GlowCare</h3>
          <p className="text-sm text-gray-500 mt-1">Skincare essentials</p>
        </div>

        {/* Brand 3 */}
        <div className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/96/water-bottle.png"
            alt="AquaLife"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-lg">AquaLife</h3>
          <p className="text-sm text-gray-500 mt-1">Hydration products</p>
        </div>

        {/* Brand 4 */}
        <div className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/96/t-shirt.png"
            alt="UrbanWear"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-lg">UrbanWear</h3>
          <p className="text-sm text-gray-500 mt-1">Summer fashion</p>
        </div>

      </div>
    </section>
    );
};

export default TopBrands;