import { useEffect, useRef, useState } from "react";
import { payHeadersDetails } from "./headersDetails";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const Headers = () => {
  const location = useLocation();
  const [selectedId, setSelectedId] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef();

  useEffect(() => {
    // this observer is a DOM in html to observe when a div dissapers from a view Point and it consist of 2 params the callback function and the object(optional)
    const obeserver = new IntersectionObserver(
      ([entry]) => {
        // this entry determine when it no longer presnt
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-10px 0px 0px 0px",
      }
    );

    if (stickyRef.current) {
      obeserver.observe(stickyRef.current);
    }

    return () => {
      if (stickyRef.current) {
        obeserver.unobserve(stickyRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const matchSelectedUrl = payHeadersDetails.find(
      (pay) => pay.path === location.pathname
    );

    if (matchSelectedUrl) {
      setSelectedId(matchSelectedUrl.id);
    } else {
      setSelectedId(payHeadersDetails[0].id);
    }
  }, [location.pathname]);
  const handleSelectedId = (id) => {
    setSelectedId(id);
  };

  const findSelectedItems = payHeadersDetails.find(
    (pay) => pay.id === selectedId
  );

  return (
    <div className="relative mb-[6rem]">
      <div
        ref={stickyRef}
        className="px-4 pb-24 text-white customTablet1:px-4 customXlg:px-14 pt-14 btn4"
      >
        {findSelectedItems && (
          <>
            <div className="mx-auto space-y-2 text-sm customXlg:container customMiniTablet:text-base ">
              <h4 className="font-semibold tracking-widest">PAY & TRANSFER</h4>
              <h2 className="text-[26px] customMiniTablet:text-[46px] leading-8 font-extrabold customMiniTablet:leading-none">
                {findSelectedItems.element}
              </h2>
              <p className=" customTablet1:pr-56 customXlg:pr-[24rem] ">
                {findSelectedItems.bottomHeader}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="relative mt-0 customTablet1:mx-4 customXlg:mx-14 mb-14">
        <div
          className={clsx(
            " px-3  z-[5] flex justify-between  w-full py-5 customMiniTablet:pr-14 shadow-xl customMiniTablet:pl-12  bg-white",
            isSticky
              ? "fixed top-0 left-0  "
              : " customTablet1:rounded-2xl  absolute left-0 -top-16 "
          )}
        >
          {payHeadersDetails.map((pay) => {
            const { id, path, element, icon } = pay;
            return (
              <div key={id}>
                <div>
                  <NavLink
                    to={path}
                    onClick={() => handleSelectedId(id)}
                    className={clsx("space-y-2", isSticky ? "flex gap-3" : "")}
                  >
                    <span
                      className={clsx(
                        "w-10 h-10  rounded-[50%] flex justify-center  ",
                        selectedId === id
                          ? "bg-customBlue-700 text-customBlue-1000"
                          : "bg-customBlue-900 text-customBlue-500 hover:bg-customBlue-500 transistion2 hover:text-customBlue-1000",
                        isSticky
                          ? ""
                          : " relative -translate-x-[50%]  left-[50%] "
                      )}
                    >
                      <span className="relative -translate-x-[50%]  left-[31%] -translate-y-[50%]  top-[68%]">
                        {icon({ size: "24px" })}
                      </span>
                    </span>
                    <h3
                      className={clsx(
                        " px-1 text-center text-[10px] customMiniTablet:text-base text-customBlue-500",
                        selectedId === id && "text-customBlue-700",
                        isSticky ? "hidden customTablet1:block" : " "
                      )}
                    >
                      {element}
                    </h3>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Headers;
