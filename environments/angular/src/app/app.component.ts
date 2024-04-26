import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ContentfulService],
})
export class AppComponent {
  // define private class properties
  public result: string = "Loading...";

  title = 'angular';

  constructor(private contentfulService: ContentfulService) {}

  // fetch data on init
  ngOnInit() {
    this.contentfulService
      .getEntries()
      .then((result) => (this.result = result));
  }
}
