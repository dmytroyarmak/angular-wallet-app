import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {WalletModule} from './wallet.module';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(WalletModule);
