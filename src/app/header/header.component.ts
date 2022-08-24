import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks:any = [];
  activeLinkIndex = 0;
  constructor(private router:Router) {

}
onTabChanged(event: MatTabChangeEvent): void {
  switch (event.index) {
    case 0:
      this.router.navigate(['/','profile']);
      break;
    case 1:
      this.router.navigate(['/','education']);
      break;
    case 2:
      this.router.navigate(['/','skils_interest']);
      break;
    case 3:
      this.router.navigate(['/','projects']);
      break;
    case 4:
      this.router.navigate(['/','certificates']);
      break;
    case 5:
      this.router.navigate(['/','contactme']);
      break;
  }
}
ngOnInit(): void {

}
}
