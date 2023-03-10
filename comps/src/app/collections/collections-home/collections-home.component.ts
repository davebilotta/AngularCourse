import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'Marco',
      age: 24,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Jill',
      age: 26,
      job: 'Engineer',
      employed: false,
    },
    {
      name: 'Dave',
      age: 44,
      job: 'CFO',
      employed: true,
    },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
