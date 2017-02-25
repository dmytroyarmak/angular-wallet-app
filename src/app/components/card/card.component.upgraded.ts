import {Directive, ElementRef, Injector, Input, Output, EventEmitter} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';
import {ICard} from '../../wallet.service';

@Directive({
    selector: 'w-card'
})
export class CardComponentUpgraded extends UpgradeComponent {
    @Input() public card: ICard;
    @Input() public isSelected: boolean;
    @Output() public onSelect: EventEmitter<{}>;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('wCard', elementRef, injector);
    }
}
