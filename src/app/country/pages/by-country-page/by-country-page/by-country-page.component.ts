import { Component } from '@angular/core';
import { SearchInputComponent } from "../../../../shared/components/search-input/search-input.component";
import { CountryListComponent } from "../../../components/country-list/country-list.component";

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
countries(): import("../../../interfaces/rest-countries.interface").RestCountry[] {
throw new Error('Method not implemented.');
}
}
