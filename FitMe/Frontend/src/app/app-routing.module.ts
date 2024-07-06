import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path :'', component: HomeComponent },
  {path :'login', component: LoginComponent },
  {path :'home', component: HomeComponent},
  {path :'register', component: RegisterComponent },
  {path :'aboutus' , canActivate:[authGuard],component:AboutusComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
