import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { BehaviorSubject, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  categoryInfo$: any = new BehaviorSubject(null);
  defaultInfo$: any = new BehaviorSubject(null);

  protected environment = environment;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategoryInfo(name: string, params: any = '') {
   return  this.http.get<{count: number, next: string | null, previous: string | null , results: any}>(`${this.apiUrl}${name}${params}`)
       .pipe(tap((data) =>{ this.categoryInfo$.next(data)} ));
  }

  getDefaultInfo(link:any) {
    return  this.http.get<{count: number, next: string | null, previous: string | null , results: any}>(link)
      .pipe(tap((data) =>{ this.defaultInfo$.next(data)} ));
  }
}
