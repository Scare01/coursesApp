import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [CourseCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [CourseCardComponent],
})
export class CourseCardModule { }
