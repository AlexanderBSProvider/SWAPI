import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { CategoryDataService } from "../../shared/services/category-data.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  urlParams = '';

  starshipsUrl = [];
  starshipsInfo:any = [];

  speciesUrl = [];
  speciesInfo:any = [];

  vehiclesUrl = [];
  vehiclesInfo:any = [];

  planetsUrl = [];
  planetsInfo:any = [];

  peopleUrl = [];
  peopleInfo:any = [];

  filmsInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  filmsReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlParams = 'films' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((itemInfo:any) => {

      this.speciesUrl = itemInfo['species'];
      this.speciesUrl.forEach((specie) => {
        this.getSpeciesInfo(specie);
      });

      this.starshipsUrl = itemInfo['starships'];
      this.starshipsUrl.forEach((starship) => {
        this.getStarshipsInfo(starship);
      });

      this.vehiclesUrl = itemInfo['vehicles'];
      this.vehiclesUrl.forEach((vehicle) => {
        this.getVehiclesInfo(vehicle);
      });

      this.peopleUrl = itemInfo['characters'];
      this.peopleUrl.forEach((people) => {
        this.getPeopleInfo(people);
      });

      this.planetsUrl = itemInfo['planets'];
      this.planetsUrl.forEach((planet) => {
        this.getPlanetsInfo(planet);
      });
    });
  }

  getPlanetsInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const planetInfo = {
        name: data.name,
        number: linkId,
      }

      this.planetsInfo.push(planetInfo);
    });
  }

  getSpeciesInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const specieInfo = {
        name: data.name,
        number: linkId,
      }

      this.speciesInfo.push(specieInfo);
    });
  }

  getStarshipsInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const starshipInfo = {
        name: data.name,
        number: linkId,
      }

      this.starshipsInfo.push(starshipInfo);
    });
  }

  getVehiclesInfo(link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const vehicleInfo = {
        name: data.name,
        number: linkId,
      }

      this.vehiclesInfo.push(vehicleInfo);
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
