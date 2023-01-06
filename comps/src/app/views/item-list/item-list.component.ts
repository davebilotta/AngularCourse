import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() items = [] as any;

  constructor() {
    // This will not show anything
    // console.log(this.items);
  }

  ngOnInit(): void {
    // This will show items
    // console.log(this.items);
    //console.log('INIT');
  }
  ngOnDestroy(): void {
    //console.log('DESTROY');
  }
}
