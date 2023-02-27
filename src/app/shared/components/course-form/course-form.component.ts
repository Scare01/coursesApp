import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  authorName: string = '';
  userId: number = 0;
  authorList: {  id: number, name: string }[] = [];
  addAuthorBtn = 'ADD AUTHOR';
  createCourseBtn = 'CREATE COURSE';
  cancelBtn = 'CANCEL';

  courseForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
  });

  removeAuthor(authorId: number) {
    let filteredList = this.authorList.filter(author => author.id !== authorId);
    this.authorList = filteredList;
  }

  addAuthor(authorName: HTMLInputElement) {
    if (authorName.value.length == 0) {
      return;
    }
    let userId = this.userId + 1;
    this.userId = userId;
    this.authorList.push({ id: userId, name: authorName.value });
    authorName.value = '';
  }
}
