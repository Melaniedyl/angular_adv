import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
//import { CommonModule } from '@angular/common';



const routes: Routes  = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'grafica1', component: Grafica1Component},
   //para redireccionarme a un lugar en particular
{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
   //para cuano exista una ruta inexistente
    {path: '**', component: NopagefoundComponent},


]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
