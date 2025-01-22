import React from "react";
import { listData } from "../../lib/dummyData.js";
import "./listPage.scss";
import Filte from "../../components/Filter/Filte.jsx";
import Cards from "../../components/cards/Cards.jsx";
import Map from "../../components/map/Map.jsx";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filte />

          {data.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map item={data} />
      </div>
    </div>
  );
};

export default ListPage;
