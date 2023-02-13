import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './features/course/course.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    LoginComponent,
    RegistrationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HeaderModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
