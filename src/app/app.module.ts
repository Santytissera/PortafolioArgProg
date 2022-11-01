import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent,
    ContactoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
