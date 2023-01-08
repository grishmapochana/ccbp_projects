import React, { useState } from "react";
export default function Browseritem(props: any) {
  const [items, setItems] = useState(props.Browseritemlist);
  // const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: string) => {
    const searchitems = items.filter((each: any) =>
      each.title.toLowerCase().includes(e.toLowerCase())
    );
    setItems(searchitems);
  };
  const handleDelete = (id: number) => {
    const updatedlist = items.filter((each: any) => each.id !== id);
    setItems(updatedlist);
  };
  // console.log(id);

  return (
    <div className=" min-h-screen">
      <div className="bg-[#3367d6] h-20  w-full px-10  grid grid-cols-10 items-center">
        <div className="col-span-2 py-2 ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="logo"
          />
        </div>

        <div className="col-span-4  items-center  bg-[#2850a7] border-2 border-[#6697ff] rounded-lg">
          <div className="flex">
            <img
              className="  border-r-2 py-3  px-8 rounded-l-lg border-[#6697ff] "
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="text"
              className="placeholder:text-[#64748b] font-semibold w-full focus:outline-none text-white bg-[#2850a7]  rounded-lg px-2 py-3 "
              placeholder="Search History"
              onChange={(e) => {
                // setSearchInput(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="px-32">
        <div
          className={`mt-10  mb-10  mx-auto   shadow-gray-200 container ${
            items.length > 0 ? "shadow-lg" : "shadow-none"
          } `}
        >
          <ul className="px-10 py-3">
            {items &&
              items.map((each: any) => (
                <li className="  mt-4  " key={each.id}>
                  <div className="grid grid-cols-8 justify-between px-2 py-2 items-center">
                    <div className="col-span-1 ">
                      <p className="text-[#64748b] text-md font-semibold">
                        {each.timeAccessed}
                      </p>
                    </div>
                    <div className="col-span-6  flex items-center gap-4  ">
                      <img src={each.logoUrl} />
                      <p className="text-[#475569] font-semibold text-lg">
                        {each.title}
                      </p>
                      <p className="text-slate-400 text-base font-semibold">
                        {" "}
                        {each.domainUrl}{" "}
                      </p>
                    </div>
                    <button
                      className="col-span-1"
                      onClick={() => {
                        handleDelete(each.id);
                      }}
                    >
                      <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png " />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {items.length === 0 && (
        <p className="text-center text-xl text-[#64748b]">
          There is no history to show
        </p>
      )}
    </div>
  );
}
