import { useState } from "react";
import Person from "../containers/person.jsx";
import ScheduleMeetForm from "../containers/scheduleMeetForm.jsx";

export default function Meeting() {
  const [meetData, setMeetData] = useState({
    name: "Gaurav Garg",
    duration: 15,
    timing: "9:30am - 9:45am, Friday, September 16, 2022",
    timeZone: "India Standard Time",
  });
  const [data, setData] = useState({ name: "", email: "", preparation: "" });
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setShow(true);
  }

  return (
    <div className="md:flex p-12">
      <Person meetData={meetData} />
      <ScheduleMeetForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
      {show && (
        <div
          className="h-screen w-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
          onClick={(e) => setShow(false)}
        >
          {data.name === "" || data.email === "" ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="p-8 w-[300px] h-[200px] md:w-[500px] md:h-[400px] shadow-lg bg-white flex justify-center items-center flex-col"
            >
              <p className="text-red-600 font-semibold text-[30px] -mt-6">
                Error
              </p>
              {data.name === "" && (
                <p className="text-28px text-center font-medium">
                  Name Field cannot be empty!
                </p>
              )}
              {data.email === "" && (
                <p className="text-28px mt-2 text-center font-medium">
                  Email Field cannot be empty!
                </p>
              )}
            </div>
          ) : (
            <div className="relative p-8 w-[400px] h-[300px] flex flex-col justify-center items-start shadow-lg bg-white ">
              <p className="text-green-600 font-semibold text-[30px] text-center left-[calc(50%-55px)] absolute top-8">
                Success
              </p>
              <p className="text-left">
                <span className="text-neutral-700 mr-2">Name:</span>
                {data.name}
              </p>
              <p className="text-left">
                <span className="text-neutral-700 mr-2">Email:</span>{" "}
                {data.email}
              </p>
              {data.preparation !== "" && (
                <p className="text-left">
                  <span className="text-neutral-700 mr-2">
                    Extra Information:
                  </span>
                  {data.preparation}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
