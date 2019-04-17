import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HereComponent } from './here/here.component';
import { ThereComponent } from './there/there.component';

const routes: Routes = [
  { path: 'here', component: HereComponent, data: { title: 'Here' } },
  { path: 'there', component: ThereComponent, data: { title: 'There' } },
  { path: '', redirectTo: '', component: HereComponent, data: { title: 'Here' }, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
