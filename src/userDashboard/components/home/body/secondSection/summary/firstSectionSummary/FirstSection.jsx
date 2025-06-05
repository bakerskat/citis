import { useState } from "react";
import Selected2 from "./selectedSections/Selected2";

const FirstSection = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal && (
        <>
          {/* <Selected1 setModal={setModal} /> */}
          <Selected2 setModal={setModal} />
        </>
      )}
    </>
  );
};

export default FirstSection;
