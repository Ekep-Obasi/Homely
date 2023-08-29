// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxPopover,
// } from "@reach/combobox";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import "@reach/combobox/styles.css";
// import { useContext } from "react";
// import { AppContext } from "../../../context/app";

// const Search = () => {
//   const { setLocation } = useContext(AppContext);
//   const {
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const result = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(result[0]);
//     setLocation({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect} className="search-area">
//       <ComboboxInput
//         placeholder="search Location"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         className="combobox-input"
//       />
//       {button && <ComboboxButton value="Search" className="button" />}
//       <ComboboxPopover id="select" style={{ zIndex: 2 }}>
//         <ComboboxList>
//           {status === "OK" &&
//             data?.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };

// export default Search;
