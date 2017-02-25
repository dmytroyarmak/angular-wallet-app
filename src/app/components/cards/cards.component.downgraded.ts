import {downgradeComponent} from '@angular/upgrade/static';
import {CardsComponent} from './cards.component';

export default downgradeComponent({
    component: CardsComponent,
    inputs: ['cards', 'selectedCard'],
    outputs: ['addCard', 'selectCard']
});
