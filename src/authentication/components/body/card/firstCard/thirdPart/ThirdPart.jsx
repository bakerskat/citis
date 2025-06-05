const ThirdPart = ({ cardSide }) => {
  return (
    <div className="relative mx-2 ">
      <div className="absolute left-0 z-30 flex items-center justify-around w-full py-10 bg-white box-shadow5 rounded-xl -top-4">
        {cardSide.map((car, i) => {
          const { name, icon } = car;
          return (
            <div key={i} className="group">
              <div className="flex items-center justify-center mb-3 text-2xl ">
                <p className="flex items-center justify-center w-10 h-10 rounded-full bg-customBlue-500 bg-opacity-15 text-customBlue-500 transistion2 group-hover:bg-customBlue-200 group-hover:text-white">
                  {icon()}
                </p>
              </div>
              <h3 className="text-xs font-bold text-center customMiniTablet:text-sm text-customBlue-500 group-hover:font-bold group-hover:text-customBlue-200 transistion2">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdPart;
