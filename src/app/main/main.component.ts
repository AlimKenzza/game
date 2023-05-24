import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  redirectToLocalhost() {
    window.location.href = 'http://localhost:4200';
  }
}
