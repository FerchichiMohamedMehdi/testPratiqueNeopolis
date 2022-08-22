import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';

const routes: Routes = [
  {path: 'Home' , component : AppComponent},
  {path: 'login' , component : LoginComponent},
  {path: 'register' , component : RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
