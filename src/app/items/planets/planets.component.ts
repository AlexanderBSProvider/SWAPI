import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { CategoryDataService } from "../../shared/services/category-data.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  urlParams = '';
  filmsUrl = [];
  filmsInfo:any = [];

  peopleUrl = [];
  peopleInfo:any = [];

  planetInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  planetReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlParams = 'planets' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((itemInfo:any ) => {

      this.filmsUrl = itemInfo.films;
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film);
      });

      this.peopleUrl = itemInfo.residents;
      this.peopleUrl.forEach((resident) => {
        this.getPeopleInfo(resident);
      });
    });
  }

  getFilmInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const filmInfo = {
        name: data.title,
        number: linkId,
      }

      this.filmsInfo.push(filmInfo);
    });
  }

  getPeopleInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const peopleInfo = {
        name: data.name,
        number: linkId,
      }

      this.peopleInfo.push(peopleInfo);
    });
  }
}
