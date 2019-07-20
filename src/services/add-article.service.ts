import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddArticleService {
  
  url = new URL("http://blogcast.wip/api/articles");
 
  headers = {
      "Authorization": "Bearer {token}",
      "Content-Type": "application/json",
      "Accept": "application/json",
  }

 body = {
    "url": "https:\/\/miguelpiedrafita.com\/building-blogcast",
    "voice": "CFj59"
  }

  /*


fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));


*/
  
  constructor(private http: HttpClient) { }

  addArticle(url) {
    console.log(url);
  }
}

