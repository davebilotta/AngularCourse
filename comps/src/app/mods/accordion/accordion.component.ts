import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items: any = [];
  openedItemIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number): void {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    }
    else {
      this.openedItemIndex = index;
    }
  }

}
