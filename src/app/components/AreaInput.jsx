"use client";

import { useState, useEffect } from "react";
import Fieldset from "./Fieldset";

export default function AreaInput() {
  // guest input til at vælge area ved at fetch areas og map igennem.
  const [data, setData] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://polarized-chrome-trouser.glitch.me/available-spots");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSelection = (area) => {
    setSelectedArea(area);
  };

  return (
    <Fieldset title={"Choose your camping area:"}>
      {data.map((area) => (
        <div
          key={area.spots}
          // tilføjede cursor-pointer
          className="hover:bg-orange-100 flex items-center justify-between  rounded-2xl p-3 cursor-pointer "
          onClick={() => handleSelection(area.area)}
        >
          <label
            className="flex justify-between cursor-pointer"
            htmlFor={area.area}
            // fjernede onClick={() => handleSelection(area.area)}
          >
            {area.area}
          </label>
          <div className="grid place-items-center">
            <input
              type="radio"
              id={area.area}
              name="area"
              value={`${area.area}:${area.available}`}
              className="col-start-1 row-start-1 appearance-none w-4 h-4 border-2 border-orange-300 rounded-full shrink-0"
              onChange={() => handleSelection(area.area)}
              checked={selectedArea === area.area}
            />
            <div
              className={`col-start-1 row-start-1 w-2 h-2 rounded-full bg-orange-300 ${
                selectedArea === area.area ? "" : "hide"
              }`}
            />
          </div>
        </div>
      ))}
    </Fieldset>
  );
}
