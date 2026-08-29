import { useContext } from "react";
import { CountriesContext } from "./countries-context.js";

export function useCountries() {
  return useContext(CountriesContext);
}
