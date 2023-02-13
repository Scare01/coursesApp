import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  constructor() {}

  @Input() data: any;
  @Input() editable?: boolean;

  btnText = "Show Course";
  deleteIcon = "trash-can" as IconName;
  editIcon = "pencil" as IconName;
}
