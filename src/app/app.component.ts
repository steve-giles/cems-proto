import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from './backend/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cems-proto';
  token = '';
  // isAuthenticated = false;

  public isMenuCollapsed = true;

  constructor(public authService: AuthService,
              private elm: ElementRef,
              private route: ActivatedRoute,
              private router: Router) {

    // this.authService.isAuthenticated.subscribe((isAuthenticated: boolean) => {
    //   this.isAuthenticated = isAuthenticated;
    // });
  }

  ngOnInit(): void {

    // debugger;
    //
    // this.route.queryParamMap.subscribe(queryParams => {
    //   this.token = queryParams.get('token');
    //   if (this.token) {
    //     this.isAuthenticated = true;
    //     this.authService.authorized = true;
    //     this.router.navigate(['/']);
    //   }
    // });
    //
    // debugger;

    // this.route.queryParams.map(params => params['var1']);
    //
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.token = params[0];
    // });

    // this.testService.getFilterSet();

    // this.testService.getFilterSet2().subscribe(data => {
    //   debugger;
    //   console.log('dat is :' + data);
    // });
  }

  async logout(): Promise<void> {
    await this.authService.logout('/');
  }
}
