export default function Person({ meetData }) {
  return (
    <div className="flex flex-col lg:block  md:w-[40%] lg:w-[45%] text-left">
      <p className="text-neutral-500 font-semibold leading-[18px] text-[16px]">
        {meetData.name}
      </p>
      <p className="text-[32px] mb-4 font-bold -ml-1">
        {meetData.duration} Minute Meeting
      </p>
      <p className="text-neutral-500 font-semibold mb-2 text-[16px]">
        {meetData.duration} min
      </p>
      <p className="text-neutral-500 font-semibold mb-2 text-[16px]">
        {meetData.timing}
      </p>
      <p className="text-neutral-500 font-semibold leading-[24px] text-[16px]">
        {meetData.timeZone}
      </p>
    </div>
  );
}
