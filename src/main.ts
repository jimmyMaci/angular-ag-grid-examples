import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {environment} from "./environment/environment";
import { ModuleRegistry, AllCommunityModules } from '@ag-grid-community/all-modules';

if(environment.production === true){
  enableProdMode();
}

ModuleRegistry.registerModules(AllCommunityModules);
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
