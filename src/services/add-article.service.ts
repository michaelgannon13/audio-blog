import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AddArticleService {
  
  endpoint = "http://blogcast.host/api/articles";
  sentUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQwMTA0OTM4IiwiY2xpZW50SWQiOiJmNnp1aXpkeWh4cm03ciIsInVzZXJJZFR5cGUiOiJFTkRfVVNFUiIsInNjb3BlIjoiZW5kX3VzZXIiLCJpc3MiOiIxMTI0NzkzIiwiZXhwIjoxNTk1MjUxMzExLCJpYXQiOjE1NjM2Mjg5MTF9.g_jXWBdWAFgL8HSrixPNRfiRpow4RUNGvd9bcqCJnMBof-kLFVXAoKFdnUtLNi5CXe3Ficlc4vlxGsABYwDe_Q",
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  }



 body = {
    "url": "https://medium.com/@amberleyjohanna/seriously-though-what-is-a-progressive-web-app-56130600a093",
    "voice": "CFj59"
  }

  constructor(private http: HttpClient) { }

  addArticle (url): Observable<any> {
    return this.http.post(
      this.endpoint, 
      this.body, 
      this.httpOptions)
    .pipe(map((response: any) => response.json()));
  }
}