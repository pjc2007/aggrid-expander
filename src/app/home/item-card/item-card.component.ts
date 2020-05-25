import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() public item: ListItem;
  
  public isOpen: boolean = false;
  constructor() { }

  ngOnInit() { 
    let i = 0;
  }
  
  public toggle() : void {
    this.isOpen = !this.isOpen;
    this.item.setIsOpen(this.isOpen);
  }
}
