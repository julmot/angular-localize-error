import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {
  }

  public ngOnInit(): void {
    document.body.classList.add('transition-ready');
  }
}
