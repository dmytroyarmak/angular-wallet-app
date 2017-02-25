import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'w-add-card',
  templateUrl: './add-card.component.html'
})
export class AddCardComponent {
  @Output() public add = new EventEmitter();
}
