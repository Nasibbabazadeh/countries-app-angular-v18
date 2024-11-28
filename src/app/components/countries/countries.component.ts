import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllCountriesService } from '../../services/all-countries/all-countries.service';
import { IAllCountries } from '../../models/allCountries.model';
import { CountryCardComponent } from "../cards/country-card/country-card.component";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CountryCardComponent],
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
