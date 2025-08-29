import React from "react";

export const TableRow = ({ name, email, spending, payments, remaining, img }) => {
  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <input
            id={`hs-table-pagination-checkbox-${name}`}
            type="checkbox"
            className="border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 
              dark:bg-neutral-800 dark:border-neutral-700 
              dark:checked:bg-blue-500 dark:checked:border-blue-500 
              dark:focus:ring-offset-gray-800"
          />
          <label
            htmlFor={`hs-table-pagination-checkbox-${name}`}
            className="sr-only"
          >
            Checkbox
          </label>
        </div>
      </td>

      {/* Avatar + Name + Email */}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        <div className="shrink-0 group block">
          <div className="flex items-center">
            <img
              className="inline-block shrink-0 size-10 rounded-full"
              src={img}
              alt="Avatar"
            />
            <div className="ms-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">
                {email}
              </p>
            </div>
          </div>
        </div>
      </td>

      {/* Spending */}
      <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        <span className="px-2 py-2 max-w-max bg-[#ECEFF3] rounded-xl text-xs text-[#545D71] flex gap-1 flex-row-reverse">
          <span>{spending}</span>
          <span>ILS</span>
        </span>
      </td>

      {/* Payments */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        <span className="px-2 py-2 max-w-max bg-[#E7F5EE] rounded-xl text-xs text-[#029242] flex gap-1 flex-row-reverse">
          <span>{payments}</span>
          <span>ILS</span>
        </span>
      </td>

      {/* Remaining */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        <span className="px-2 py-2 max-w-max rounded-xl text-xs flex gap-1 flex-row-reverse">
          <span>{remaining}</span>
          <span>ILS</span>
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <div className="hs-dropdown relative inline-flex">
          <button
            id={`hs-dropdown-custom-icon-trigger-${name}`}
            type="button"
            className="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold 
              rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs 
              hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 
              disabled:opacity-50 disabled:pointer-events-none 
              dark:bg-neutral-900 dark:border-neutral-700 dark:text-white 
              dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              className="flex-none size-4 text-gray-600 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={12} cy={5} r={1} />
              <circle cx={12} cy={19} r={1} />
            </svg>
          </button>
          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 
              opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 
              dark:bg-neutral-800 dark:border dark:border-neutral-700 z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={`hs-dropdown-custom-icon-trigger-${name}`}
          >
            <div className="p-1 space-y-0.5">
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm 
                  text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 
                  dark:text-neutral-400 dark:hover:bg-neutral-700 
                  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                تفاصيل
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm 
                  text-blue-600 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 
                  dark:text-neutral-400 dark:hover:bg-neutral-700 
                  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                تعديل
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm 
                  text-red-600 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 
                  dark:text-neutral-400 dark:hover:bg-neutral-700 
                  dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                حذف
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
