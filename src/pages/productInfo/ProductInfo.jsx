import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../fireabase/FirebaseConfig";

function ProductInfo() {
  const context = useContext(myContext);
  const { setLoading } = context;

  const [product, setProduct] = useState(null);
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {product ? (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={product?.imageUrl}
                  alt={product?.title}
                  className="w-full h-auto object-contain rounded-md shadow-md"
                />
              </div>
              
              {/* Product Details */}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  {product?.title}
                </h1>
                <p className="leading-relaxed mb-4">{product?.description}</p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {product?.price} tk
                  </span>
                  <button
                    onClick={() => addCart(product)}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
