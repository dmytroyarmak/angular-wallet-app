import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {WalletModule} from './wallet.module';

platformBrowserDynamic().bootstrapModule(WalletModule);
