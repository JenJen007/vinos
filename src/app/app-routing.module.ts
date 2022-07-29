import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVinoComponent } from './components/create-vino/create-vino.component';
import { ListVinosComponent } from './components/list-vinos/list-vinos.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-vinos', pathMatch: 'full' },
  { path: 'list-vinos', component: ListVinosComponent },
  { path: 'create-vino', component: CreateVinoComponent },
  { path: 'editVino/:id', component: CreateVinoComponent },
  { path: '**', redirectTo: 'list-vinos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
