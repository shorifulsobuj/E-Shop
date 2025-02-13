import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function PhonePage() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterPrice } = context;

  const phoneProducts = product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((obj) => obj.category.toLowerCase() === 'phone')
    .filter((obj) => obj.price.includes(filterPrice));

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2"
            style={{ color: mode === 'dark' ? 'white' : '' }}
          >
            Phones
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {phoneProducts.map((item, index) => (
            <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div
                  onClick={() => (window.location.href = `/productinfo/${item.id}`)}
                  className="flex justify-center cursor-pointer"
                >
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    E-Shop
                  </h2>
                  <h1 className="title-font text-lg font-medium mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{item.price}.tk</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhonePage;
