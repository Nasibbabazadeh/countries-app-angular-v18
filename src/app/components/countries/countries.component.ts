import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllCountriesService } from '../../services/all-countries/all-countries.service';
import { IAllCountries } from '../../models/allCountries.model';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  _countriesData: IAllCountries[] = []
  constructor(
    private _allCountriesService: AllCountriesService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllCountries()

  }

  fetchAllCountries() {
    this._allCountriesService.getAllCountries().subscribe({
      next: (data: IAllCountries[]) => {
        this._countriesData = data
      }
    })
  }
  get countries() {
    return this._countriesData
  }

}
