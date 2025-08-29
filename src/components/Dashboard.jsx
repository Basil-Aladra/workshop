import { useState } from "react";
import WorkshopList from "./WorkshopList";
import AddWorkshop from "./AddWorkshop";
import Sidbar from "./sidbar/Sidbar";
import { UsersTable } from "./userstable/UsersTable";

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("workshops");
  const [workshops, setWorkshops] = useState([]);

  const addWorkshop = (workshop) => {
    const newWorkshop = {
      id: Date.now(),
      ...workshop,
      payments: [],
      expenses: [],
      createdAt: new Date().toLocaleDateString(),
    };
    setWorkshops([...workshops, newWorkshop]);
  };

  const updateWorkshop = (id, updatedWorkshop) => {
    setWorkshops(
      workshops.map((w) => (w.id === id ? { ...w, ...updatedWorkshop } : w))
    );
  };

  const deleteWorkshop = (id) => {
    setWorkshops(workshops.filter((w) => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidbar />
      <UsersTable/>
    </div>
  );
}

export default Dashboard;
