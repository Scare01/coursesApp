import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [SearchComponent],
})
export class SearchModule { }
