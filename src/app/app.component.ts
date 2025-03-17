import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './shared/components/loader/loader.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular_template';
  constructor(private loader: LoaderService, private dataSrvc: DataService) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataSrvc.loadApi().subscribe((data) => {
      console.log(data);
    });
  }
}
