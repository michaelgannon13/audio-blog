import { Component } from '@angular/core';
import { AddArticleService } from '../services/add-article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private addArticleService: AddArticleService) { }

  url = window.location.href;
  response;

  saveArticle() {
    this.addArticleService.addArticle(this.url);

    this.addArticleService
      .addArticle(this.url)
      .subscribe((res: any[]) => {
        this.response = res;
        console.log(this.response);
    });
  }
}
