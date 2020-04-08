import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular-demo';
  model = {
    values: {
      title: '',
      content: '',
      authorName: ''
    },
    help: {
      title: 'Write a title here',
      content: 'Write the content here',
      authorName: 'Write your name here'
    }
  }

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    this.http.post(URL, this.model.values)
      .subscribe(post => alert(JSON.stringify(post)))
  }
}
