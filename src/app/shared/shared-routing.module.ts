import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignalsWorkshopComponent } from './pages/signals-workshop/signals-workshop.component';
import { SignalsFormComponent } from './pages/signals-form/signals-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { hideLayout: true }, // TODO: Hide Layout
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { hideLayout: true }, // TODO: Hide Layout
  },
  {
    path: 'signals',
    component: SignalsWorkshopComponent,
  },
  {
    path: 'signalforms',
    component: SignalsFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
