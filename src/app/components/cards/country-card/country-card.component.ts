import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  @Input({ required: true }) cardTitle!: string
  @Input({ required: true }) cardImg!: string
  @Input({ required: true }) cardDescription!: string
}
