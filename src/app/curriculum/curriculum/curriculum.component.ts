import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {CurriculumService} from '../curriculum.service';
import {Course, CurriculumData} from '../../models/curriculum.types';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(public curriculumService: CurriculumService, private formBuilder: FormBuilder) { }

  curriculums$: Observable<CurriculumData[]>;

  curriculumForm: FormGroup;
  curriculumDetails: CurriculumData;
  selectedCourse: Course;

  ngOnInit(): void {
    this.curriculumForm = this.formBuilder.group({
      selectedCurriculum: '',
      selectedCourse: ''
    });

    this.curriculums$ = this.curriculumService.getCurriculumForCompany();

    this.curriculumForm.get('selectedCurriculum').valueChanges.subscribe((data: string) => {
      this.curriculumService.getCurriculum(data).subscribe(result => {
        this.curriculumDetails = result;
        console.log(result);
      });
    });
  }

}
