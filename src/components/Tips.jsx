import React from 'react';

const Tips = () => {
    return (
        
    <div className="bg-[#FF9A3C]/60 py-10 px-6 rounded-2xl  mx-auto my-10 shadow-sm">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
         Summer Care Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Tip 1 */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Hydration</h3>
          <p className="text-gray-600 text-sm">
            Drink plenty of water throughout the day to stay fresh and avoid dehydration in hot weather.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Skin Care</h3>
          <p className="text-gray-600 text-sm">
            Use sunscreen (SPF 30+) daily and reapply every few hours when outside.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Clothing</h3>
          <p className="text-gray-600 text-sm">
            Wear light, breathable cotton clothes to stay cool and comfortable in the heat.
          </p>
        </div>

      </div>
    </div>
       
    );
};

export default Tips;