import { Component, ViewChild } from '@angular/core';
import { SideBarService } from './services/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private sidebarService: SideBarService) {
  }

  @ViewChild('sidenav') public sideNav: MatSidenav;

  title = 'pl-cms-primary';

  ngAfterViewInit(): void {
    this.sidebarService.setSidenav(this.sideNav);
  }
}
