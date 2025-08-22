import { useState } from "react";
import WorkshopDetails from "./WorkshopDetails";

function WorkshopList({ workshops, onUpdate, onDelete }) {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  if (workshops.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Workshops Yet
          </h3>
          <p className="text-gray-500">
            Get started by adding your first workshop.
          </p>
        </div>
      </div>
    );
  }

  if (selectedWorkshop) {
    return (
      <WorkshopDetails
        workshop={selectedWorkshop}
        onUpdate={(updatedWorkshop) => {
          onUpdate(selectedWorkshop.id, updatedWorkshop);
          setSelectedWorkshop({ ...selectedWorkshop, ...updatedWorkshop });
        }}
        onBack={() => setSelectedWorkshop(null)}
        onDelete={() => {
          onDelete(selectedWorkshop.id);
          setSelectedWorkshop(null);
        }}
      />
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          All Workshops
        </h3>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Workshop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workshops.map((workshop) => {
                const totalPayments = (workshop.payments || []).reduce(
                  (sum, payment) => sum + parseFloat(payment.amount || 0),
                  0
                );
                const totalExpenses = (workshop.expenses || []).reduce(
                  (sum, expense) => sum + parseFloat(expense.amount || 0),
                  0
                );
                const profit = totalPayments - totalExpenses;

                return (
                  <tr key={workshop.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {workshop.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {workshop.duration}h • {workshop.capacity}{" "}
                          participants
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {workshop.instructor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(workshop.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${parseFloat(workshop.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            profit > 0
                              ? "bg-green-100 text-green-800"
                              : profit < 0
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {profit > 0
                            ? `+$${profit.toFixed(2)}`
                            : profit < 0
                            ? `-$${Math.abs(profit).toFixed(2)}`
                            : "$0.00"}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedWorkshop(workshop)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onDelete(workshop.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WorkshopList;
