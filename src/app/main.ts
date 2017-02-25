import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import 'angular';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static'
import {WalletModule} from './wallet.module';

platformBrowserDynamic().bootstrapModule(WalletModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['wallet'], {strictDi: true});
});
