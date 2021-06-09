import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cems-proto';

  public isMenuCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
    // this.testService.getFilterSet();

    // this.testService.getFilterSet2().subscribe(data => {
    //   debugger;
    //   console.log('dat is :' + data);
    // });
  }
}
