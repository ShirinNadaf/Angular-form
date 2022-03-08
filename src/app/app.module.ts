import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmailvalidatorDirective } from './Directive/Email/emailvalidator.directive';
import { PasswordPatternDirective } from './Directive/password/passwordvalidator.directive';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    EmailvalidatorDirective,
    PasswordPatternDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ReactiveFormComponent},
      {path: 'template-form', component: TemplateFormComponent},
    ]), 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
