import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';
import { CursoFormComponent } from "./cursos/cursos-form/cursos-form.component";
import { CursoDetalheComponent } from "./cursos/cursos-detalhe/cursos-detalhe.component";
import { AlunosModule } from './alunos/alunos.module';
import { LoginComponent } from './login /login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login /login.service';
import { AuthGuard } from './login /login.guard';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
    CursoFormComponent,
    CursoDetalheComponent

  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
