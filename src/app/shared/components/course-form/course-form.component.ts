import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { emailValidator } from '../../utils/email-validator';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  authorList = [];
  addAuthorBtn = 'ADD AUTHOR';
  createCourseBtn = 'CREATE COURSE';
  cancelBtn = 'CANCEL';


  courseForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    author: new FormControl(''),
    authorList: new FormControl([]),
    duration: new FormControl('', Validators.required),
  });

  removeAuthor(removeAuthorName: string) {
    this.authorList.filter(author => author !== removeAuthorName);
    this.courseForm.controls.authorList.setValue(this.authorList);
  }

  addAuthor() {
    let newAuthor = this.courseForm.controls['author'].value || '';
    if (newAuthor.length > 0) {
      // @ts-ignore
      this.authorList.push(newAuthor);
      this.courseForm.controls.authorList.setValue(this.authorList);
    }
  }

}
