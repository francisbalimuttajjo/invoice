const Loading = () => {
  return (
    <div className="  space-x-2 animate-pulse mt-90   ">
      <h1 className=" ml-3 flex mt-40 items-center justify-center space-x-2  animate-pulse">
        Please Wait
      </h1>
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
};
export default Loading;


