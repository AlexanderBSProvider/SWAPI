import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoriesValues = [
    'FILMS',
    'PEOPLE',
    'PLANETS',
    'STARSHIPS',
    'VEHICLES',
    'SPECIES'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
