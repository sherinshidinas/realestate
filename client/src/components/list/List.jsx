import React from "react";
import { listData } from "../../lib/dummyData";
import Cards from "../cards/Cards";
import "./list.scss"

function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
