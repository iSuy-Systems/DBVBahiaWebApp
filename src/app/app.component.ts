import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  actualYear: any;

  ngOnInit(): void {
    const date = new Date();
    this.actualYear = date.getFullYear();
  }
}
