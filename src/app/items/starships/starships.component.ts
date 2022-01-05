import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  urlParams = '';

  filmsUrl = [];
  filmsInfo:any = [];

  peopleUrl = [];
  peopleInfo:any = [];

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  starshipsInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;
  speciesReferences: BehaviorSubject<any> = this.categoryDataService.defaultInfo$;

  ngOnInit(): void {
    this.urlParams = 'starships' + '/' + this.activatedRoute.snapshot.params['itemId'];
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

      this.peopleInfo.push(peopleInfo);
    });
  }
}
