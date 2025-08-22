import { useState } from "react";

function WorkshopDetails({ workshop, onUpdate, onBack, onDelete }) {
  const [activeTab, setActiveTab] = useState("info");
  const [newPayment, setNewPayment] = useState({
    amount: "",
    method: "cash",
    description: "",
    date: "",
  });
  const [newExpense, setNewExpense] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });
  const [newFollowUp, setNewFollowUp] = useState({
    date: "",
    note: "",
    status: "pending",
  });

  const payments = workshop.payments || [];
  const expenses = workshop.expenses || [];
  const followUps = workshop.followUps || [];

  const totalPayments = payments.reduce(
    (sum, payment) => sum + parseFloat(payment.amount || 0),
    0
  );
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount || 0),
    0
  );
  const profit = totalPayments - totalExpenses;

  const handleAddPayment = (e) => {
    e.preventDefault();
    const payment = {
      id: Date.now(),
      ...newPayment,
      amount: parseFloat(newPayment.amount),
      createdAt: new Date().toISOString(),
    };
    onUpdate({
      payments: [...payments, payment],
    });
    setNewPayment({ amount: "", method: "cash", description: "", date: "" });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const expense = {
      id: Date.now(),
      ...newExpense,
      amount: parseFloat(newExpense.amount),
      createdAt: new Date().toISOString(),
    };
    onUpdate({
      expenses: [...expenses, expense],
    });
    setNewExpense({ amount: "", category: "", description: "", date: "" });
  };

  const handleAddFollowUp = (e) => {
    e.preventDefault();
    const followUp = {
      id: Date.now(),
      ...newFollowUp,
      createdAt: new Date().toISOString(),
    };
    onUpdate({
      followUps: [...followUps, followUp],
    });
    setNewFollowUp({ date: "", note: "", status: "pending" });
  };

  const deletePayment = (id) => {
    onUpdate({
      payments: payments.filter((p) => p.id !== id),
    });
  };

  const deleteExpense = (id) => {
    onUpdate({
      expenses: expenses.filter((e) => e.id !== id),
    });
  };

  const updateFollowUpStatus = (id, status) => {
    onUpdate({
      followUps: followUps.map((f) => (f.id === id ? { ...f, status } : f)),
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <button
              onClick={onBack}
              className="text-indigo-600 hover:text-indigo-900 mb-2 flex items-center"
            >
              ← Back to Workshops
            </button>
            <h2 className="text-2xl font-bold text-gray-900">
              {workshop.name}
            </h2>
            <p className="text-gray-600">{workshop.description}</p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium">Instructor:</span>{" "}
                {workshop.instructor}
              </div>
              <div>
                <span className="font-medium">Date:</span>{" "}
                {new Date(workshop.date).toLocaleDateString()}
              </div>
              <div>
                <span className="font-medium">Duration:</span>{" "}
                {workshop.duration} hours
              </div>
              <div>
                <span className="font-medium">Capacity:</span>{" "}
                {workshop.capacity} people
              </div>
            </div>
          </div>
          <button
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Delete Workshop
          </button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="font-medium text-green-900">Total Payments</h3>
          <p className="text-2xl font-bold text-green-600">
            ${totalPayments.toFixed(2)}
          </p>
          <p className="text-sm text-green-700">{payments.length} payment(s)</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow">
          <h3 className="font-medium text-red-900">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600">
            ${totalExpenses.toFixed(2)}
          </p>
          <p className="text-sm text-red-700">{expenses.length} expense(s)</p>
        </div>
        <div
          className={`p-4 rounded-lg shadow ${
            profit >= 0 ? "bg-blue-50" : "bg-yellow-50"
          }`}
        >
          <h3
            className={`font-medium ${
              profit >= 0 ? "text-blue-900" : "text-yellow-900"
            }`}
          >
            Net Profit
          </h3>
          <p
            className={`text-2xl font-bold ${
              profit >= 0 ? "text-blue-600" : "text-yellow-600"
            }`}
          >
            ${profit.toFixed(2)}
          </p>
          <p
            className={`text-sm ${
              profit >= 0 ? "text-blue-700" : "text-yellow-700"
            }`}
          >
            {profit >= 0 ? "Profitable" : "Loss"}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {["info", "payments", "expenses", "followups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab === "followups" ? "Follow-ups" : tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Info Tab */}
          {activeTab === "info" && (
            <div>
              <h3 className="text-lg font-medium mb-4">Workshop Information</h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Workshop Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {workshop.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Instructor
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {workshop.instructor}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {new Date(workshop.date).toLocaleDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Duration
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {workshop.duration} hours
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Capacity
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {workshop.capacity} participants
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Price</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    ${parseFloat(workshop.price).toFixed(2)}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {workshop.description}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Payments</h3>
              </div>

              {/* Add Payment Form */}
              <form
                onSubmit={handleAddPayment}
                className="bg-gray-50 p-4 rounded-lg mb-6"
              >
                <h4 className="font-medium mb-4">Add New Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="number"
                    placeholder="Amount"
                    step="0.01"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newPayment.amount}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, amount: e.target.value })
                    }
                  />
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newPayment.method}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, method: e.target.value })
                    }
                  >
                    <option value="cash">Cash</option>
                    <option value="check">Check</option>
                    <option value="card">Card</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                  <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newPayment.date}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, date: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newPayment.description}
                    onChange={(e) =>
                      setNewPayment({
                        ...newPayment,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Add Payment
                </button>
              </form>

              {/* Payments List */}
              <div className="space-y-3">
                {payments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex justify-between items-center p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium">
                        ${payment.amount.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {payment.method.charAt(0).toUpperCase() +
                          payment.method.slice(1)}{" "}
                        • {payment.date} • {payment.description}
                      </div>
                    </div>
                    <button
                      onClick={() => deletePayment(payment.id)}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {payments.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No payments recorded yet.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Expenses Tab */}
          {activeTab === "expenses" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Expenses</h3>
              </div>

              {/* Add Expense Form */}
              <form
                onSubmit={handleAddExpense}
                className="bg-gray-50 p-4 rounded-lg mb-6"
              >
                <h4 className="font-medium mb-4">Add New Expense</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="number"
                    placeholder="Amount"
                    step="0.01"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newExpense.amount}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, amount: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newExpense.category}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, category: e.target.value })
                    }
                  />
                  <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newExpense.date}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, date: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newExpense.description}
                    onChange={(e) =>
                      setNewExpense({
                        ...newExpense,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Add Expense
                </button>
              </form>

              {/* Expenses List */}
              <div className="space-y-3">
                {expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex justify-between items-center p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium">
                        ${expense.amount.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {expense.category} • {expense.date} •{" "}
                        {expense.description}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {expenses.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No expenses recorded yet.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Follow-ups Tab */}
          {activeTab === "followups" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Follow-ups</h3>
              </div>

              {/* Add Follow-up Form */}
              <form
                onSubmit={handleAddFollowUp}
                className="bg-gray-50 p-4 rounded-lg mb-6"
              >
                <h4 className="font-medium mb-4">Add New Follow-up</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newFollowUp.date}
                    onChange={(e) =>
                      setNewFollowUp({ ...newFollowUp, date: e.target.value })
                    }
                  />
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newFollowUp.status}
                    onChange={(e) =>
                      setNewFollowUp({ ...newFollowUp, status: e.target.value })
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Follow-up note"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2"
                    value={newFollowUp.note}
                    onChange={(e) =>
                      setNewFollowUp({ ...newFollowUp, note: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Follow-up
                </button>
              </form>

              {/* Follow-ups List */}
              <div className="space-y-3">
                {followUps.map((followUp) => (
                  <div
                    key={followUp.id}
                    className="flex justify-between items-center p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{followUp.note}</div>
                      <div className="text-sm text-gray-500">
                        Due: {followUp.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <select
                        value={followUp.status}
                        onChange={(e) =>
                          updateFollowUpStatus(followUp.id, e.target.value)
                        }
                        className="text-sm border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          followUp.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : followUp.status === "in_progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {followUp.status.replace("_", " ")}
                      </span>
                    </div>
                  </div>
                ))}
                {followUps.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No follow-ups scheduled yet.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetails;
