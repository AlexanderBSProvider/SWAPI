import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  itemInfo$: any = new BehaviorSubject(null);
  protected environment = environment;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getItemInfo(name: string, params: any = '') {
    return  this.http.get<{count: number, next: string | null, previous: string | null , results: any}>(`${this.apiUrl}${name}${params}`)
      .pipe(tap((data) =>{ this.itemInfo$.next(data)} ));
  }
}
