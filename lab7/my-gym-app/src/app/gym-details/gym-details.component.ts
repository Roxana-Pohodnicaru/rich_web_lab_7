// imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gym } from '../gym.model';


@Component({
  selector: 'app-gym-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.css']
})

export class GymDetailsComponent {
  @Input() gym?: Gym;
}