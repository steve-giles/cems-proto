import { Component, OnInit } from '@angular/core';
import {FiltersService} from '../filters.service';
import {Observable} from 'rxjs';
import {FilterData} from '../../models/filters.types';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public filtersService: FiltersService, private formBuilder: FormBuilder) { }

  filters$: Observable<FilterData[]>;

  filterForm: FormGroup;
  filterDetails: FilterData;

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      selectedFilter: ''
    });

    this.filters$ = this.filtersService.getFiltersForCompany();

    this.filterForm.get('selectedFilter').valueChanges.subscribe((data: string) => {
      this.filtersService.getFilterSet(data).subscribe(result => {
        this.filterDetails = result;
        console.log(result);
      });
    });
  }

}
