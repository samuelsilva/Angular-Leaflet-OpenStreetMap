import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointedMapComponent } from './components/pointed-map/pointed-map.component';

const routes: Routes = [
    { path:'Locais', component:PointedMapComponent },
    { path:'*', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}