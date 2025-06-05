const Added = ({ bill, details }) => {
  return (
    <div className="p-4 px-6 card2">
      <h2 className="mb-5 header">{bill}</h2>
      <p className="mb-5 font-light text-customGray-400">{details}</p>
    </div>
  );
};

export default Added;
