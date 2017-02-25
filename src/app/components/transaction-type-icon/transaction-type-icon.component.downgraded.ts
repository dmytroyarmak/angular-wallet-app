import {downgradeComponent} from '@angular/upgrade/static';
import {TransactionTypeIconComponent} from './transaction-type-icon.component';

export default downgradeComponent({
    component: TransactionTypeIconComponent,
    inputs: ['type']
});
