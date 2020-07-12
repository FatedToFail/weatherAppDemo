import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import GeoResponse from './geo-respone';


@Injectable({
  providedIn: 'root'
})
export class GeoDataService {

  constructor(private http: HttpClient) { }

  public getGeoDataByCoordinate(lon: number, lat: number): Observable<string> {
    return this.http.get(`${environment.PROD_GEO_API_URL}/json?q=${lat}+${lon}&key=${environment.PROD_GEO_API_KEY}`)
      .pipe(
        map(this.getNameOfCityOrVillage),
        catchError(this.handleError),
      );
  }

  private handleError(data): Observable<any> {
    console.log(data);
    return of(data);
  }

  private getNameOfCityOrVillage(data: GeoResponse): string {
    const nameObj = data.results[0].components
    if (nameObj.city) return nameObj.city;
    if (nameObj.village) return nameObj.village;
    if (nameObj.town) return nameObj.town;
    return null;
  }
}
