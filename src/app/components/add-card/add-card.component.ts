import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'w-add-card',
  templateUrl: './add-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCardComponent {
  @Output() public add = new EventEmitter();
}
