import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0; // note that this is 0-indexed
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Beautiful Sunset',
      url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog with Flower',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Birthday Cake',
      url: 'https://images.unsplash.com/photo-1545696563-af8f6ec2295a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog Running On Beach',
      url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Beautiful Sunset',
      url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog with Flower',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Birthday Cake',
      url: 'https://images.unsplash.com/photo-1545696563-af8f6ec2295a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog Running On Beach',
      url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Beautiful Sunset',
      url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog with Flower',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Birthday Cake',
      url: 'https://images.unsplash.com/photo-1545696563-af8f6ec2295a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog Running On Beach',
      url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Beautiful Sunset',
      url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog with Flower',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Birthday Cake',
      url: 'https://images.unsplash.com/photo-1545696563-af8f6ec2295a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Dog Running On Beach',
      url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
