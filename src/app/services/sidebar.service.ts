import { Injectable, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})

export class SideBarService {

  constructor() { }

  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public getSidenav() {
    return this.sidenav;
  }

  toggleSidenav(): void {
    console.log('toggling');
  
   // this.sidenav.toggle()
  }
}
