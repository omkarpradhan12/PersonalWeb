import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillsInterestsComponent } from './skills-interests/skills-interests.component';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';
import { CertificatesComponent } from './certificates/certificates.component';


const routes: Routes = [
  {path:"profile", component:ProfileComponent},
  {path:"education", component:EducationComponent},
  {path:"skils_interest", component:SkillsInterestsComponent},
  {path:"projects", component:AcademicProjectsComponent},
  {path:"certificates", component:CertificatesComponent},
  {path:"contactme", component:ContactInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
