import { bootstrapBasket } from '@ng-icons/bootstrap-icons';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputComponent } from './components/reactive-input/reactive-input.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './store/shared.reducers';
import { NgIconsModule } from '@ng-icons/core';
import { SignalsWorkshopComponent } from './pages/signals-workshop/signals-workshop.component';
import { SignalsFormComponent } from './pages/signals-form/signals-form.component';
@NgModule({
  declarations: [
    HomePageComponent,
    MainLayoutComponent,
    LoginComponent,
    ReactiveInputComponent,
    RegisterComponent,
    SignalsWorkshopComponent,
    SignalsFormComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ bootstrapBasket }),
  ],
  exports: [MainLayoutComponent, ReactiveInputComponent], // dış modüllerin kullanabileceği, dışarıya export edilen modüller
})
export class SharedModule {}
