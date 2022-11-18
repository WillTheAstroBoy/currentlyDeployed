export default function ScheduleMeetForm({ data, setData, handleSubmit }) {
  function handleChange({ target }) {
    const { name, value } = target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start mt-20 md:mt-0 md:px-12 md:w-[60%] lg:w-[55%]"
    >
      <p className="font-bold mb-2">Enter Details</p>

      {/* input for name */}
      <label id="name" className="font-semibold text-[14px] mb-2">
        Name *
      </label>
      <input
        value={data.name}
        onChange={handleChange}
        type="text"
        name="name"
        className="p-2 border-2 rounded-md mb-6 h-12 border-solid border-neutral-200 outline-0 w-full"
      />

      {/* input for email */}
      <label id="email" className="font-semibold text-[14px] mb-2">
        Email *
      </label>
      <input
        value={data.email}
        onChange={handleChange}
        type="email"
        name="email"
        className="p-2 border-2 rounded-md h-12 border-solid border-neutral-200 outline-0 w-full "
      />

      <button
        type="button"
        className="py-[3px] px-4 mt-2 text-cyan-700 mb-4 border border-solid border-cyan-700 rounded-full font-medium"
      >
        Add Guests
      </button>

      <label
        id="preparation"
        className="font-semibold text-[14px] mb-2 text-left"
      >
        Please share anything that will help prepare for our meeting.
      </label>
      <textarea
        value={data.preparation}
        onChange={handleChange}
        name="preparation"
        className="p-2 h-32 border-2 border-solid border-neutral-200 w-full"
      />

      <button className="p-6 py-3 text-white mt-14 font-bold bg-blue-500 rounded-full">
        Schedule Event
      </button>
    </form>
  );
}
