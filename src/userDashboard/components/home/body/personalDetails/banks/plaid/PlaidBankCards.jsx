const PlaidBankCards = ({ allBank, handleSelectedBank }) => {
  const { id, img } = allBank;

  return (
    <>
      <div
        className="flex justify-center w-full h-full p-2 border box-shadow3 border-customGray-1006 border-opacity-30 rounded-xl hover:border-customGray-900 transistion2 "
        onClick={() => handleSelectedBank(id)}
      >
        <img
          src={img}
          alt=""
          className="object-contain w-[5.5rem] h-[2.8rem]"
        />
      </div>
    </>
  );
};

export default PlaidBankCards;
