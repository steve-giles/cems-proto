import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class CurriculumModule { }
