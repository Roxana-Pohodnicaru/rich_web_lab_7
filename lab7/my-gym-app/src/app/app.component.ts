// imports
import { Component } from '@angular/core';
import { GymListComponent } from './gym-list/gym-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GymListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Gym App';
}