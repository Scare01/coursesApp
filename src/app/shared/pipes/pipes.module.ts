import { NgModule } from '@angular/core';
import { DurationPipe } from './duration.pipe';
import { CreationDatePipe } from './creation-date.pipe';

@NgModule({
  declarations: [DurationPipe, CreationDatePipe],
  imports: [],
  exports: [DurationPipe, CreationDatePipe]
})
export class PipesModule {}
