import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { CategoryDataService } from "../../shared/services/category-data.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  urlParams = '';

  filmsUrl = [];
  filmsInfo:any = [];

  starshipsUrl = [];
  starshipsInfo:any = [];

  speciesUrl = [];
  speciesInfo:any = [];

  vehiclesUrl = [];
  vehiclesInfo:any = [];

  planetUrl = '';
  planetsInfo = {
    name: '',
    number: 0,
  };

  peopleInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  peopleReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlParams = 'people' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((itemInfo:any) => {

      this.filmsUrl = itemInfo['films'];
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film);
      });

      this.getPlanetInfo(itemInfo.homeworld);

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

  getPlanetInfo(link:any) {
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
}
