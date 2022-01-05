import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  urlParams = '';

  filmsUrl = [];
  filmsInfo:any = [];

  peopleUrl = [];
  peopleInfo:any = [];

  planetUrl = '';
  planetsInfo = {
    name: '',
    number: 0,
  };

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  speciesInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  speciesReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  ngOnInit(): void {
    this.urlParams = 'species' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((data:any ) => {

      this.filmsUrl = data.films;
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film)
      });

      this.peopleUrl = data.people;
      this.peopleUrl.forEach((people) => {
        this.getPeopleInfo(people)
      });

      this.getPlanetInfo(data.homeworld);
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

  getPlanetInfo (link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const planetInfo = {
        name: data.name,
        number: linkId,
      }

      this.planetsInfo = planetInfo;
    });
  }
}
