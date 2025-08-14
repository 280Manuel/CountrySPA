import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';


  const API_URL= 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(resp=> CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError(error =>{
        console.log('Error Fetching', error);
        return throwError(() => new Error(`No se pudo obtener la informacion: ${query}`))
      })
    );
  };

  searchByCountry(query: string): Observable<Country[]>{
    query= query.toLocaleLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError(error =>{
        console.log('Error Fetching,', error);
      return throwError(() => new Error( `No se pudo obtener la imformacion ${query}`))
      })
    );
  };

  searchCountryByCode(code: string): Observable<Country[]>{
    const url =`${API_URL}/alpha/${code}`
    return this.http.get<RestCountry[]>(url).pipe(
      map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map (countries => countries[0]),
      catchError(error =>{
        console.log('Error Fetching,', error);
      return throwError(() => new Error( `No se pudo obtener la imformacion de: ${code}`))
      })
    );
  };

}
