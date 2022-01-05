import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

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

  constructor(private categoryDataService: CategoryDataService,
  private activatedRoute: ActivatedRoute) { }

  planetInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  planetReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  ngOnInit(): void {
    this.urlParams = 'planets' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((data:any ) => {

      this.filmsUrl = data.films;
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film)
      });

      this.peopleUrl = data.residents;
      this.peopleUrl.forEach((resident) => {
        this.getPeopleInfo(resident)
      });
    });
  }

  getFilmInfo (link:any) {
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
