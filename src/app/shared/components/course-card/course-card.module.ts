import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { ButtonModule } from '../button/button.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [ CourseCardComponent ],
  imports: [
    CommonModule,
    ButtonModule,
    PipesModule,
  ],
  exports: [CourseCardComponent],
})
export class CourseCardModule { }
