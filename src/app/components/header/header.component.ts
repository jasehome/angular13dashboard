import { Component, OnInit} from '@angular/core';
import { SideBarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private siderbarService:SideBarService) { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.siderbarService.toggleSidenav();
  }
}
