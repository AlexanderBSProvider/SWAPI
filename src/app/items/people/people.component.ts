import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

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

  getA(a:any) {
    console.log(a)
  }

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  peopleInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  peopleReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  ngOnInit(): void {
    this.urlParams = 'people' + '/' + this.activatedRoute.snapshot.params['itemId'];
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe((data:any ) => {
      console.log(data, '111')

      this.filmsUrl = data.films;
      this.filmsUrl.forEach((film) => {
        this.getFilmInfo(film)
      });

      this.getPlanetInfo(data.homeworld)

      this.speciesUrl = data['species'];
      this.speciesUrl.forEach((specie) => {
        this.getSpeciesInfo(specie)
      });

      this.starshipsUrl = data['starships'];
      this.starshipsUrl.forEach((starship) => {
        this.getStarshipsInfo(starship)
      });

      this.vehiclesUrl = data['vehicles'];
      this.vehiclesUrl.forEach((vehicle) => {
        this.getVehiclesInfo(vehicle)
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

  getPlanetInfo (link:any) {
    this.categoryDataService.getDefaultInfo(link).subscribe((data:any) => {

      let linkId = link.split('/');
      linkId = linkId[linkId.length - 2];

      const planetInfo = {
        name: data.name,
        number: linkId,
      }
      this.planetsInfo = planetInfo;
      console.log('planetsInfo',this.planetsInfo)
    });
  }

  getSpeciesInfo (link:any) {
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

  getStarshipsInfo (link:any) {
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

  getVehiclesInfo (link:any) {
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
