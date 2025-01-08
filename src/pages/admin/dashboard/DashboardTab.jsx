import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Include React Tabs default styles
import myContext from "../../../context/data/myContext";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function DashboardTab() {
  const context = useContext(myContext);
  const { mode, product, edithandle, deleteProduct, order, user } = context;

  const handleAddProduct = () => {
    window.location.href = "/addproduct";
  };

  const textColor = mode === "dark" ? "text-white" : "text-gray-800";
  const bgColor = mode === "dark" ? "bg-gray-800" : "bg-white";
  const borderColor = mode === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>
        Dashboard
      </h1>

      <Tabs className="shadow-lg rounded-lg overflow-hidden">
        <TabList className="flex justify-center gap-4 bg-purple-600 p-4 rounded-t-lg">
          <Tab selectedClassName="bg-purple-800 rounded-lg">
            <button className="flex items-center gap-2 text-white font-medium px-4 py-2 transition">
              <MdOutlineProductionQuantityLimits size={24} /> Products
            </button>
          </Tab>
          <Tab selectedClassName="bg-purple-800 rounded-lg">
            <button className="flex items-center gap-2 text-white font-medium px-4 py-2 transition">
              <AiFillShopping size={24} /> Orders
            </button>
          </Tab>
          <Tab selectedClassName="bg-purple-800 rounded-lg">
            <button className="flex items-center gap-2 text-white font-medium px-4 py-2 transition">
              <FaUser size={24} /> Users
            </button>
          </Tab>
        </TabList>

        {/* Product Panel */}
        <TabPanel className={`p-6 ${bgColor} ${textColor}`}>
          <div className="h-[600px] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Product Details</h2>
              <button
                onClick={handleAddProduct}
                className="flex items-center gap-2 text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition shadow-lg ml-4"
              >
                Add Product <FaCartPlus size={20} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table
                className={`min-w-full text-sm text-left ${textColor} border ${borderColor} rounded-lg shadow-md`}
              >
                <thead
                  className={`text-xs uppercase ${bgColor} ${textColor} border-b ${borderColor}`}
                >
                  <tr>
                    <th className="px-6 py-3">S.No</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b ${borderColor} hover:bg-gray-100 transition`}
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img
                          src={item.imageUrl}
                          alt="Product"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4">{item.title}</td>
                      <td className="px-6 py-4">{item.price}.tk</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">{item.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => deleteProduct(item)}
                            className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-xs px-3 py-2 flex items-center gap-1"
                          >
                            Delete
                          </button>
                          <Link to={"/updateproduct"}>
                            <button
                              onClick={() => edithandle(item)}
                              className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-xs px-3 py-2 flex items-center gap-1"
                            >
                              Edit
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>

        {/* Orders Panel */}
        <TabPanel className={`p-6 ${bgColor} ${textColor}`}>
          <div className="h-[600px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
            <div className="overflow-x-auto">
              <table
                className={`min-w-full text-sm text-left ${textColor} border ${borderColor} rounded-lg shadow-md`}
              >
                <thead
                  className={`text-xs uppercase ${bgColor} ${textColor} border-b ${borderColor}`}
                >
                  <tr>
                    <th className="px-6 py-3">S.No</th>
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Total</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b ${borderColor} hover:bg-gray-100 transition`}
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{item.orderId}</td>
                      <td className="px-6 py-4">{item.customer}</td>
                      <td className="px-6 py-4">{item.total}.tk</td>
                      <td className="px-6 py-4">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>

        {/* Users Panel */}
        <TabPanel className={`p-6 ${bgColor} ${textColor}`}>
          <div className="h-[600px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-6">User Details</h2>
            <div className="overflow-x-auto">
              <table
                className={`min-w-full text-sm text-left ${textColor} border ${borderColor} rounded-lg shadow-md`}
              >
                <thead
                  className={`text-xs uppercase ${bgColor} ${textColor} border-b ${borderColor}`}
                >
                  <tr>
                    <th className="px-6 py-3">S.No</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">UID</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b ${borderColor} hover:bg-gray-100 transition`}
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.uid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DashboardTab;
