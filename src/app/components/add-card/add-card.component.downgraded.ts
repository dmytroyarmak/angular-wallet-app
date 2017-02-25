import {downgradeComponent} from '@angular/upgrade/static';
import {AddCardComponent} from './add-card.component';

export default downgradeComponent({
    component: AddCardComponent,
    outputs: ['add']
});
