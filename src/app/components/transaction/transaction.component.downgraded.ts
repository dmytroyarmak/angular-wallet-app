import {downgradeComponent} from '@angular/upgrade/static';
import {TransactionComponent} from './transaction.component';

export default downgradeComponent({
    component: TransactionComponent,
    inputs: ['transaction']
});
