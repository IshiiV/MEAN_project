import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyListComponent } from './my-list/my-list.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [MyListComponent, MyFormComponent],
  imports: [
  	FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [MyListComponent, MyFormComponent],
  providers: [CursosService]
})
export class CursosModule { }
