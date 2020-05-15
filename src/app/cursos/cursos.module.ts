import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { AppRoutingModule } from '../app-routing.module';
import { CursoFormComponent } from './cursos-form/cursos-form.component';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
