import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      username: 'daveb44',
      content: 'Found this great tree on a hike!',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Mountain biking',
      username: 'biker123',
      content: 'I love mountain biking, did a lot this past week',
      imageUrl: 'assets/biking.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'skilover99',
      content: 'Double Black Diamond? Bring it on',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'skilover99',
      content: 'Double Black Diamond? Bring it on',
      imageUrl: 'assets/mountain.jpeg',
    },
  ];
}
