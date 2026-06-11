import React from "react";
import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import Home from "./Home";
import Transaction from "./Transaction";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-[250px]">
        <Heading />

        <main className="px-10">
          <Card/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;