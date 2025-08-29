import React from 'react'
import { TableRow } from './TableRow/TableRow'

export const UsersTable = () => {
  return (
    <div className="flex flex-col float-end w-3/4 ml-10">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <div className="py-3 px-4">
          <div className="relative max-w-xs">
            <label className="sr-only">Search</label>
            <input
              type="text"
              name="hs-table-with-pagination-search"
              id="hs-table-with-pagination-search"
              className="py-1.5 sm:py-2 px-3 ps-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Search for items"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
              <svg
                className="size-4 text-gray-400 dark:text-neutral-500"
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
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-50 dark:bg-neutral-700">
              <tr>
                <th scope="col" className="py-3 px-4 pe-0">
                  <div className="flex items-center h-5">
                    <input
                      id="hs-table-pagination-checkbox-all"
                      type="checkbox"
                      className="border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="hs-table-pagination-checkbox-all"
                      className="sr-only"
                    >
                      Checkbox
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                 اسم الورشة
                </th>
                <th
                  scope="col"
                  className="px-2 py-3  text-start  text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                 مجموع المصاريف
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                 مجموع الدفعات
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
      الباقي
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          
          <TableRow name="حسن" email="hasan@gmail.com" payments="1,500"  spending="3,500" remaining="1,500" img={"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"} />
         
            </tbody>
          </table>
        </div>
        <div className="py-1 px-4">
          <nav className="flex items-center space-x-1" aria-label="Pagination">
            <button
              type="button"
              className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
            >
              2
            </button>
            <button
              type="button"
              className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
            >
              3
            </button>
            <button
              type="button"
              className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
