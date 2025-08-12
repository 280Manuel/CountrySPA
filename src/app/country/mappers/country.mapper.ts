import type { Country } from "../interfaces/country.interface";
import type { RestCountry } from "../interfaces/rest-countries.interface";


// Se expresa como se puede usar o crear un mapeador para no depender de las propiedades del backend y sea mas tolerante
// a los errores que puedan surgir por cambios sin previo aviso


export class CountryMapper {
  static mapRestCountryToCountry(restCoutry:RestCountry): Country{
    return{
      cca2:restCoutry.cca2,
      flag:restCoutry.flag,
      flagSVG:restCoutry.flags.svg,
      name:restCoutry.name.common,
      capital: restCoutry.capital.join(', '),
      population: restCoutry.population
    };
  };

  static mapRestCountryArrayToCountryArray(restCountry: RestCountry[]): Country[]{
    return restCountry.map(this.mapRestCountryToCountry);
  }
}
