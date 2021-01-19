import { DrinkDetailComponent } from './pages/drink-detail/drink-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'drinks', pathMatch: 'full', component: DrinkListComponent },
  { path: 'drinks/:id', pathMatch: 'full', component: DrinkDetailComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'drinks' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
