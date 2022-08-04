import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillsInterestsComponent } from './skills-interests/skills-interests.component';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EducationComponent,
    SkillsInterestsComponent,
    AcademicProjectsComponent,
    CertificatesComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
