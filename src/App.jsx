import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./shared/Sidebar.jsx";
import Navbar from "./shared/Navbar.jsx";
import SuperAdminDashboardPage from "./pages/superAdmin/SuperAdminDashboardPage.jsx";
import SuperAdminCustomer from "./pages/superAdmin/SuperAdminCustomer.jsx";
import SuperAdminPricingPage from "./pages/superAdmin/SuperAdminPricingPage.jsx";
import SuperAdminBillingPage from "./pages/superAdmin/SuperAdminBillingPage.jsx";
import SuperAdminRenewelsPage from "./pages/superAdmin/SuperAdminRenewelsPage.jsx";
import SuperAdminInvoices from "./pages/superAdmin/SuperAdminInvoices.jsx";
import SuperAdminSettingPage from "./pages/superAdmin/SuperAdminSettingPage.jsx";
import CreatePlanModel from "../src/components/superAdmin/Pricing/CreatePlanModel.jsx";
import SuperAdminNotificationPage from "./pages/superAdmin/SuperAdminNotificationPage.jsx";
const App = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 w-full">
        <Sidebar />
        <div className="flex-1  flex flex-col  w-full md:w-100 lg:w-100">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
            <Routes>
              <Route path="/" element={<SuperAdminDashboardPage />} />
              <Route
                path="/superadmin/customer"
                element={<SuperAdminCustomer />}
              />
              <Route
                path="/superadmin/billing"
                element={<SuperAdminBillingPage />}
              />
              <Route
                path="/superadmin/pricing"
                element={<SuperAdminPricingPage />}
              />
              <Route
                path="/superadmin/renewals"
                element={<SuperAdminRenewelsPage />}
              />
              <Route
                path="/superadmin/invoices"
                element={<SuperAdminInvoices />}
              />
              <Route
                path="/superadmin/setting"
                element={<SuperAdminSettingPage />}
              />
              <Route
                path="/superadmin/notification"
                element={<SuperAdminNotificationPage />}
              />
              <Route path="/create-plan" element={<CreatePlanModel />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
