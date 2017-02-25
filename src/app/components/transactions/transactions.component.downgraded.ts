import {downgradeComponent} from '@angular/upgrade/static';
import {TransactionsComponent} from './transactions.component';

export default downgradeComponent({
    component: TransactionsComponent,
    inputs: ['card']
});
