import MenuCards from "./MenuCards";

const MenuMaps = ({ navs }) => {
  return (
    <>
      <div>
        {navs.map((nav, i) => (
          <MenuCards key={i} nav={nav} />
        ))}
      </div>
    </>
  );
};

export default MenuMaps;
