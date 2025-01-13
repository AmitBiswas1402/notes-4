import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.paste?.pastes || []);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
            <div className="border">
              <div className="">
                {paste.title}
              </div>
              <div>
                {paste.content}
              </div>
              <div className="flex flex-row gap-4 place-content-evenly">
                <button>
                  Edit
                </button>
              </div>
            </div>
            )
          })}
      </div>
    </div>
  );
};
export default Paste;
