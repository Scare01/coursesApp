import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './features/course/course.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './shared/components/header/header.module';
import { InfoModule } from './shared/components/info/info.module';
import { ButtonModule } from './shared/components/button/button.module';
import { CourseCardModule } from './shared/components/course-card/course-card.module';
import { CourseListComponent } from './shared/components/course-list/course-list.component';
import { LoginFormModule } from './shared/components/login-form/login-form.module';
import { RegistrationFormModule } from './shared/components/registration-form/registration-form.module';
import { CourseFormModule } from './shared/components/course-form/course-form.module';
import { SearchModule } from './shared/components/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    LoginComponent,
    RegistrationComponent,
    CourseListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HeaderModule,
        InfoModule,
        ButtonModule,
        CourseCardModule,
        LoginFormModule,
        RegistrationFormModule,
        CourseFormModule,
        SearchModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
