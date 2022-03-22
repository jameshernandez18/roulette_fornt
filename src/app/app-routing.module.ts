import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CreateBetComponent} from './roulette/create-bet-roulette/create-bet/create-bet.component';
import {ViewRouletteDetailComponent} from './roulette/view-roulette/view-roulette-detail/view-roulette-detail.component';



const routes: Routes = [
  {
    path: 'roulette/create',
    component: CreateBetComponent
  },
  {
    path: 'roulette/view',
    component: ViewRouletteDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
