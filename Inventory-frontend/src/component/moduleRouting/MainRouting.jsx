import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Signin from "../authentication/Signin";
import PinLogin from "../authentication/PinLogin";
import Mpin from "../authentication/Mpin";
import Dashboard from "../dashboard/Dashboard";
import BuyersSuppliers from "../buyersSuppliers/BuyersSuppliers";
import ShoesItem from "../inventory/ShoesItem";
import ClothingItem from "../inventory/ClothingItem";
import AccessoriesItem from "../inventory/AccessoriesItem";
import Categories from "../inventory/Categories";
import ItemsList from "../inventory/ItemsList";
import Warehouse from "../inventory/Warehouse";
import CreateCompany from "../authentication/CreateCompany";
import PurchaseOrder from "../purchase/PurchaseOrder";
import Invoices from "../purchase/Invoices";
import SalesForm from "../sales/SalesForm";
import Transactions from "../payment/Transactions";
import Invoice from "../sales/Invoice";

const MainRouting = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Signin onLogin={handleLogin} />}
      />
      
      <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/set-mpin" element={loggedIn ? <Mpin /> : <Navigate to="/" />} />
      <Route path="/mpin" element={loggedIn ? <PinLogin /> : <Navigate to="/" />} />
      <Route path="/createcompany" element ={ loggedIn ? <CreateCompany/> : <Navigate to="/" />} />
      <Route path="/buyers-suppliers" element={loggedIn ? <BuyersSuppliers /> : <Navigate to="/" />} />
      <Route path="/inventory/categories" element={loggedIn ? <Categories /> : <Navigate to="/" />} />
      <Route path="/inventory/items-list/:id" element={loggedIn ? <ItemsList /> : <Navigate to="/" />} />
      <Route path="/inventory/shoes" element={loggedIn ? <ShoesItem /> : <Navigate to="/" />} />
      <Route path="/inventory/clothing" element={loggedIn ? <ClothingItem /> : <Navigate to="/" />} />
      <Route path="/inventory/accessories" element={loggedIn ? <AccessoriesItem /> : <Navigate to="/" />} />
      <Route path="/inventory/warehouse" element={loggedIn ? <Warehouse /> : <Navigate to="/" />} />
      <Route path="/purchase/purchase-order" element={loggedIn ? <PurchaseOrder /> : <Navigate to="/" />} />
      <Route path="/purchase/invoices" element={loggedIn ? <Invoices /> : <Navigate to="/" />} />
      <Route path="/sales/sales-order" element={loggedIn ? <SalesForm /> : <Navigate to="/" />} />
      <Route path="/payment/transactions" element={loggedIn ? <Transactions /> : <Navigate to="/" />} />
      <Route path="/sales/invoice" element={loggedIn ? <Invoice /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default MainRouting;
