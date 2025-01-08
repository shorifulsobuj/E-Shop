import React, { useContext, useEffect, useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../fireabase/FirebaseConfig';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsSnapshot = await getDocs(collection(fireDB, 'products'));
        setTotalProducts(productsSnapshot.size);

        const ordersSnapshot = await getDocs(collection(fireDB, 'orders'));
        setTotalOrders(ordersSnapshot.size);

        const usersSnapshot = await getDocs(collection(fireDB, 'users'));
        setTotalUsers(usersSnapshot.size);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {/* Total Products */}
            <div className="p-4">
              <div
                className="transform transition duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-6 rounded-lg shadow-md"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <FaUserTie size={40} className="text-white w-10 h-10 mb-3 mx-auto" />
                <h2 className="title-font font-bold text-2xl">{totalProducts}</h2>
                <p className="text-md font-medium mt-1">Total Products</p>
              </div>
            </div>

            {/* Total Orders */}
            <div className="p-4">
              <div
                className="transform transition duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-6 rounded-lg shadow-md"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <FaUserTie size={40} className="text-white w-10 h-10 mb-3 mx-auto" />
                <h2 className="title-font font-bold text-2xl">{totalOrders}</h2>
                <p className="text-md font-medium mt-1">Total Orders</p>
              </div>
            </div>

            {/* Total Users */}
            <div className="p-4">
              <div
                className="transform transition duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-6 rounded-lg shadow-md"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <FaUserTie size={40} className="text-white w-10 h-10 mb-3 mx-auto" />
                <h2 className="title-font font-bold text-2xl">{totalUsers}</h2>
                <p className="text-md font-medium mt-1">Total Users</p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
