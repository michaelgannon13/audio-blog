import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AddArticleService {
  
  url = new URL("http://blogcast.wip/api/articles");
 
  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer {token}",
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  }

 body = {
    "url": "https:\/\/miguelpiedrafita.com\/building-blogcast",
    "voice": "CFj59"
  }

  constructor(private http: HttpClient) { }

  addArticle (url): Observable<any> {
    return this.http.post(url, this.httpOptions);
  }
}

