import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: '2,459', label: '# of Users' },
    { value: '900B', label: 'Total Revenue' },
    { value: '99.44%', label: 'User Satistfaction' },
    { value: '0.00001%', label: 'Downtime' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on!',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put your clothes in',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
