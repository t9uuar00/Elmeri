import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import {
  firestoreDb,
  collection,
  getDocs,
  query,
  orderBy,
  where,
} from "../firebase";

const RaportSortDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //Hae valitulla arvolla raportit Firestoresta (((((((((Testi vaiheessa, pitää siirtää parent componenttiin ja välittää callback. Ei päivitä arvoja tällä hetkellä!)))))))))
  useEffect(() => {
    const GetFilteredRaports = async () => {
      try {
        const raportCollectionRef = collection(firestoreDb, "raports");
        let filteredDocs = [];

        if (selectedValue === "hybridilabra") {
          const querySnapshot = await getDocs(
            query(
              raportCollectionRef,
              where("room", "==", "Hybridilabra") // Hae kaikki hybridilabrasta tehdyt reportit
            )
          );
          filteredDocs = querySnapshot.docs.map((doc) => doc.data());
          console.log(filteredDocs)
        }
      } catch (error) {
        console.error("Dokumentteja ei voitu hakea. Error: ", error);
      }
    };

    if (selectedValue) {
      GetFilteredRaports();
    }
  }, [selectedValue]); //Päiviä raporttinäkymä, kun valittu arvo muuttuu

  return (
    <FormControl className="FormControl">
      <InputLabel id="dropdown-label" className="InputLabel">
        Tila
      </InputLabel>
      <Select
        className="FormControl"
        labelId="dropdown-label"
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Ei mitään</em>
        </MenuItem>
        <MenuItem value="hybridilabra">Hybridilabra</MenuItem>
        <MenuItem value="labra2">Labra 2</MenuItem>
        <MenuItem value="labra3">Labra 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RaportSortDropdown;
