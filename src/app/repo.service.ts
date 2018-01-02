import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Item } from './item'; 
import { Repos } from './repo';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class RepoService {
   
    private _reposURL= "https://api.github.com/search/repositories?q=topic"

    constructor(private http: Http) {
        
    }
    
    getRepos(): Observable<Item[]> {
      return this.http.get(this._reposURL)
          .map((response: Response) => {
              return response.json().items;
              
          })
          .catch((error:any) => {
            return Observable.throw(error.json ? error.json().error : error || 'Server error') }); 
  }

    
    
}