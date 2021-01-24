import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  @ViewChild('insideElement') insideElement: any;
  sideMenuBoolean: boolean = false;
  inside = false;

  openSideMenu() {
    this.sideMenuBoolean = !this.sideMenuBoolean;
    this.inside = true;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const clickedInside = this.insideElement.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.inside = false;
      this.sideMenuBoolean = false;
    }
  }
}
