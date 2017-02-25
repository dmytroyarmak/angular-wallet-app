import {downgradeComponent} from '@angular/upgrade/static';
import {CardBalanceComponent} from './card-balance.component';

export default downgradeComponent({
    component: CardBalanceComponent,
    inputs: ['balance']
});
