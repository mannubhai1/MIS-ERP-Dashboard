"use client";
import {
  FiUser,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

interface ERPItem {
  name: string;
  status: string;
  nextStep: string;
  challenges: string;
  targetDate: string;
  primaryContact: string;
  businessUsers: string;
}

interface ERPCardProps {
  item: ERPItem;
}

export default function ERPCard({ item }: ERPCardProps) {
  const statusColors: { [key: string]: string } = {
    "In Progress": "text-blue-500 border-blue-500",
    Delayed: "text-red-500 border-red-500",
    Completed: "text-green-500 border-green-500",
    Pending: "text-yellow-500 border-yellow-500",
  };

  const statusClass =
    statusColors[item.status] || "text-gray-500 border-gray-300";

  return (
    <div
      className={`bg-white p-6 md:p-8 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl border-l-8 ${statusClass} w-full`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 break-words">
        {item.name}
      </h2>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-y-6 gap-x-4">
        {/* Status */}
        <div className="flex items-center gap-2 min-w-0">
          <FiCheckCircle
            className={`text-2xl ${
              statusColors[item.status] || "text-gray-500"
            }`}
          />
          <p className="text-lg font-medium">Status:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.status}
        </p>

        {/* Next Step */}
        <div className="flex items-center gap-2 min-w-0">
          <FiArrowRightCircle className="text-blue-500 text-2xl" />
          <p className="text-lg font-medium">Next Step:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.nextStep}
        </p>

        {/* Challenges */}
        <div className="flex items-center gap-2 min-w-0">
          <FiAlertCircle className="text-yellow-500 text-2xl" />
          <p className="text-lg font-medium">Challenges:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.challenges}
        </p>

        {/* Target Date */}
        <div className="flex items-center gap-2 min-w-0">
          <FiClock className="text-gray-500 text-2xl" />
          <p className="text-lg font-medium">Target Date:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.targetDate}
        </p>

        {/* Primary Contact */}
        <div className="flex items-center gap-2 min-w-0">
          <FiUser className="text-indigo-500 text-2xl" />
          <p className="text-lg font-medium">Primary Contact:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.primaryContact}
        </p>

        {/* Business Users */}
        <div className="flex items-center gap-2 min-w-0">
          <FiUser className="text-green-500 text-2xl" />
          <p className="text-lg font-medium">Business Users:</p>
        </div>
        <p className="text-gray-600 whitespace-pre-wrap break-words min-w-0">
          {item.businessUsers}
        </p>
      </div>
    </div>
  );
}
