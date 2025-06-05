import { zelleDetails } from "../../zelleDetails";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 customXlg:gap-8 customXlg:items-start customXlg:flex-row">
      {zelleDetails.map((zelle) => {
        const { img, id, details, title } = zelle;
        return (
          <div
            key={id}
            className="flex gap-4 customXlg:space-y-8 text-customGray-400 customXlg:block"
          >
            <div className="w-[160px] h-[160px]">
              <img src={img} alt="" className="w-full h-full" />
            </div>
            <div className="w-[170px] space-y-4  customMiniTablet:w-[350px] customXlg:w-full ">
              <h2 className="font-bold">{title}</h2>
              <p className="font-light">{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondSection;
