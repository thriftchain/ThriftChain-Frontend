import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import DashboardLayout from "./Layout/DashboardLayout";
import { configWeb3Modal } from "./connection";
import User from "./pages/Dashboard/User";
import OnboardingData from "./pages/OnboardingData";
import UserDetails from "./pages/UserDetails";
import DashboardDetails from "./pages/Dashboard/DashboardDetails";

configWeb3Modal();

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />  
      <Route path="/signup" element={<OnboardingData />} />  
    </Route>
    <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<User />} />  
    <Route path=":dashboardId" element={<UserDetails />} />
    </Route>
  </Route>
))

const App = () => {
  return (
    <div className=" w-full mx-auto bg-[#070624]  min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App