import React from "react";
import work from "../../assets/summaryIconHomePage/workCoun.png";

const SummaryHomePage = () => {
  const summatyItems = [
    {
      id: 1,
      title: "عدد الورش",
      value: "72,540",
      change: "12.5%",
      icon: work,
    },
    {
      id: 2,
      title: "المصروفات",
      value: "72,540",
      change: "12.5%",
      icon: "users",
    },
    {
      id: 3,
      title: "الشيكات المفتوحة",
      value: "72,540",
      change: "12.5%",
      icon: "users",
    },
    {
      id: 4,
      title: "المبالغ المتبقية",
      value: "72,540",
      change: "12.5%",
      icon: "users",
    },
  ];

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
          {summatyItems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral-800">
                    <svg
                      className="shrink-0 size-5 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        {item.title}
                      </p>
                      <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          {item.icons ? item.icon : ""}
                        </div>
                      </div>
                    </div>

                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        {item.value}
                      </h3>
                      <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                        <svg
                          className="inline-block size-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span className="inline-block text-xs font-medium">
                          {item.change}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryHomePage;
