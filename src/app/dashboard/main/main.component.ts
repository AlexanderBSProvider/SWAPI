import { Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  categoriesValues = [
    'FILMS',
    'PEOPLE',
    'PLANETS',
    'STARSHIPS',
    'VEHICLES',
    'SPECIES'
  ]
}
