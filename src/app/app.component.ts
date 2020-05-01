import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardsContent = [
    {
      imagUrl: 'assets/images/nature.jpg',
      title: 'Neat Trees',
      username: 'Nature',
      content: 'this is awsome image that describe the nature',
    },
    {
      imagUrl: 'assets/images/mountain.jpg',
      title: 'Mountain Nature',
      username: 'Mountain',
      content: 'this is awsome image that describe the Mountain',
    },
    {
      imagUrl: 'assets/images/biking.jpg',
      title: 'Biking Life',
      username: 'Biking',
      content: 'this is awsome image that describe the Biking',
    },
  ];
}
