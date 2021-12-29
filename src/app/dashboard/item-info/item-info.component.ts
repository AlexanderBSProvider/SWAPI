import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../services/category-data.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

  urlParams = '';
  pageEvent: PageEvent | null = null;

  constructor(private categoryDataService: CategoryDataService,
              private activatedRoute: ActivatedRoute) { }

  itemInfo: BehaviorSubject<any> = this.categoryDataService.categoryInfo$;

  ngOnInit(): void {

    this.urlParams = this.activatedRoute.snapshot.params['categoryName'] + '/' + this.activatedRoute.snapshot.params['itemId'];
    console.log('this.urlParams', this.urlParams);
    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe();
  }


  loadPage(pageInfo: any) {
    let urlParamsAdditional;

    // urlParamsAdditional =  (pageInfo['pageIndex'] + 1);

    this.categoryDataService.getCategoryInfo(this.urlParams).subscribe();
  }
}
