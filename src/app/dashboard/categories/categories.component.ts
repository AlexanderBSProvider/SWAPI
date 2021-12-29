import {Component, OnInit, ViewChild} from '@angular/core';
import { CategoryDataService } from '../../services/category-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Subject, tap} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [PageEvent]
})
export class CategoriesComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator | null = null

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute,
              pageEvent: PageEvent) { }

  result = [];

  urlParams = '';
  urlParamsAdditional = '/?page=';

  currentPage: number = 1;

  categoryInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$

  pageEvent: PageEvent | null = null;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
    }
  }

  getAdditionalParams () {
  }


  ngOnInit(): void {
    this.urlParams = this.activatedRoute.snapshot.params['categoryName'];

    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe();

    // console.log('currentPage', this.currentPage);
  }

  loadPage(pageInfo: any) {
    let urlParamsAdditional;
    this.currentPage = pageInfo.pageIndex * 10 + 1;
    // console.log('currentPage', this.currentPage);

    urlParamsAdditional = this.urlParamsAdditional + (pageInfo['pageIndex'] + 1);

    this.categoryDataService.getCategoryInfo(this.urlParams, urlParamsAdditional).subscribe((data)=>{
      console.log(data,'this');
    });
  }

  getIndexFromUrl (link:any) {

    let linkId = link.split('/');
    linkId = linkId[linkId.length - 2];

    return linkId
  }

  isFilms (item:any) {
    let keys = Object.keys(item);
    // console.log(keys[0] == 'title')
    if (keys[0] == 'title') {
      return true;
    } else {
      return false;
    }
  }
}
