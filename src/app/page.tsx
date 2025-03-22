"use client";
import { useEffect, useState } from "react";
import ERPCard from "../components/ERPCard";

interface ERPItem {
  name: string;
  status: string;
  nextStep: string;
  challenges: string;
  targetDate: string;
  primaryContact: string;
  businessUsers: string;
}

export default function Dashboard() {
  const [data, setData] = useState<ERPItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("erpData.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">ERP Dashboard</h1>

        {/* Grid layout with 2 cards per row */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {data.length > 0 ? (
            data.map((item, index) => <ERPCard key={index} item={item} />)
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
