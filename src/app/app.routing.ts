import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AgGridSimpleComponent} from "./ag-grid-simple/ag-grid-simple.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/grid', pathMatch: "full"},
    {path: 'grid', component: AgGridSimpleComponent},
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
