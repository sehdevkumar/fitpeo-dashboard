import { ActivityBarChart } from "./Activities/ActivityBarChart";

function Activities() {
  return (
    <>
      <div className="grid gap-4 justify-between p-4 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-wrap flex-1 gap-4 w-full">
          <ActivityBarChart />
        </div>
        <div className="flex min-w-max justify-center md:justify-start">
          <div className="w-full max-w-full flex flex-1"></div>
        </div>
      </div>
    </>
  );
}

export default Activities;
