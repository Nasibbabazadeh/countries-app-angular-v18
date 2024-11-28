import { Injectable } from '@angular/core';
import { GenericService } from '../generic-service/generic.service';
import { IAllCountries } from '../../models/allCountries.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCountriesService {
  private _endpoint: string = 'all'
  constructor(
    private _genericService: GenericService
  ) { }
  getAllCountries(): Observable<IAllCountries[]> {
    return this._genericService.getMethod<IAllCountries[]>(this._endpoint)
  }
}
