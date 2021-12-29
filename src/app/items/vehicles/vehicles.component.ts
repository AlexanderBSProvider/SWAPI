import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  urlParams = '';

  filmsUrl = [];
  filmsInfo:any = [];

  peopleUrl = [];
  peopleInfo:any = [];

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  vehiclesInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  vehiclesReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  ngOnInit(): void {
    this.urlParams = 'vehicles' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((data:any ) => {

      this.filmsUrl = data.films;
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film)
      });

      this.peopleUrl = data.pilots;
      this.peopleUrl.forEach((people) => {
        this.getPeopleInfo(people)
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
      console.log(peopleInfo,'peopleInfo')
      this.peopleInfo.push(peopleInfo);
    });
  }
}
