import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogcast-service';
  url = window.location.href;

  saveArticle() {
   console.log(this.url);
  }
}
