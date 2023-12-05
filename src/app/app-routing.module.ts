import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ui', component: UiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
