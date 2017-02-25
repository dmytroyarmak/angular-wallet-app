import {downgradeComponent} from '@angular/upgrade/static';
import {TransactionAmountComponent} from './transaction-amount.component';

export default downgradeComponent({
    component: TransactionAmountComponent,
    inputs: ['transaction']
});
