import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [CourseFormComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        PipesModule,
    ],
  exports: [CourseFormComponent],
})
export class CourseFormModule { }
