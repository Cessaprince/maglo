import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-[250px]">
        <Heading />

        <main className="px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;