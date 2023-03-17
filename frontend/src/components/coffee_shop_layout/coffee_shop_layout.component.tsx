import ImageMapper from "react-img-mapper";

import coffeeShopMapImage from "../../assets/tables_template.png";

const CoffeeShopLayout = () => {
  const handleAreaClick = (area: any) => {
    // handle area click event, e.g. change area color, open reservation form, etc.
    console.log("AREA CLICKED => ", area.id);
  };
  return (
    <ImageMapper
      width={768}
      src={coffeeShopMapImage}
      map={{
        name: "my-map",
        areas: [
          {
            id: "1",
            shape: "rect",
            coords: [23, 28, 114, 111],
            fillColor: "#FF0000",
          },
          {
            id: "2",
            shape: "rect",
            coords: [25, 387, 119, 472],
            fillColor: "#00FF00",
          },
          {
            id: "3",
            shape: "rect",
            coords: [204, 29, 365, 109],
            fillColor: "#0000FF",
          },
          {
            id: "4",
            shape: "rect",
            coords: [216, 189, 318, 307],
            fillColor: "#FFFF00",
          },
          {
            id: "5",
            shape: "rect",
            coords: [213, 374, 381, 465],
            fillColor: "#FF00FF",
          },
          {
            id: "6",
            shape: "rect",
            coords: [547, 13, 746, 486],
            fillColor: "#00FFFF",
          },
        ],
      }}
      onClick={handleAreaClick}
    />
  );
};

export default CoffeeShopLayout;
