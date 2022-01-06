import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { PageEvent } from "@angular/material/paginator";

import { CategoryDataService } from '../../shared/services/category-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [PageEvent]
})
export class CategoriesComponent implements OnInit {

  result = [];

  urlParams = '';
  urlParamsAdditional = '/?page=';

  currentPage: number = 1;

  categoryInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;

  pageEvent: PageEvent | null = null;

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute,
              pageEvent: PageEvent) { }

  ngOnInit(): void {
    this.urlParams = this.activatedRoute.snapshot.params['categoryName'];

    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe();
    console.log('jija')
  }

  loadPage(pageInfo: any) {
    let urlParamsAdditional;
    this.currentPage = pageInfo.pageIndex * 10 + 1;

    urlParamsAdditional = this.urlParamsAdditional + (pageInfo['pageIndex'] + 1);

    this.categoryDataService.getCategoryInfo(this.urlParams, urlParamsAdditional).subscribe();
  }

  getIndexFromUrl(link:any) {
    let linkId = link.split('/');
    linkId = linkId[linkId.length - 2];

    return linkId;
  }

  isFilms(item:any) {
    let keys = Object.keys(item);

    return keys[0] == 'title';
  }
}
