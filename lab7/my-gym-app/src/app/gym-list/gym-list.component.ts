// imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymDetailsComponent } from '../gym-details/gym-details.component';
import { Gym } from '../gym.model';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-gym-list',
  standalone: true,
  imports: [CommonModule, GymDetailsComponent, FormsModule],
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})

export class GymListComponent {

  // array of gym objects
  gyms: Gym[] = [

    { id: 1, name: 'Muscle Gym', location: 'South Dublin', equipment: ['Treadmill', 'Weights', 'Bike'] },
    { id: 2, name: 'Gains Gym', location: 'North Dublin', equipment: ['Row Machine', 'Free Weights', 'Treadmill'] },
    { id: 3, name: 'Powerlifting Gym', location: 'Wicklow', equipment: ['Squat Rack', 'Bench Press', 'Dumbbells'] }

  ];

  // gym that will be selected by user
  selectedGym?: Gym;

  // bind search field for gyms
  searchTerm: string = '';

  // data model for new gym to be add from form
  newGym: Gym = { id: 0, name: '', location: '', equipment: [] };

  // equipment available when adding new gym
  availableEquipment: string[] = ['Treadmill', 'Weights', 'Bike', 'Row Machine', 'Free Weights', 'Squat Rack', 'Bench Press', 'Dumbbells'];

  // object to keep track of selected equipment in form
  selectedEquipment: { [key: string]: boolean } = {};


  // function to filter gym results through search
  get filteredGyms() {

    // returns gym that matches search input
    return this.gyms.filter(gym =>

      // lowercasing
      gym.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || gym.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    
    );
  }

  
  // select gym and view details
  selectGym(gym: Gym) {

    this.selectedGym = gym;
  }


  // updates the checkboxes if user selects / unselects them
  updateSelectedEquipment() {

    // add to equipment array
    this.newGym.equipment = Object.keys(this.selectedEquipment)
      .filter(key => this.selectedEquipment[key]);
  }


  // handle form submission
  onSubmit() {

    // update equipment with selected checkboxes
    this.updateSelectedEquipment();

    // check if required fields are filled
    if (this.newGym.name && this.newGym.location && this.newGym.equipment.length) {

      // unique id based on gym array
      this.newGym.id = this.gyms.length + 1; 

      // add new gym to gym array
      this.gyms.push({ ...this.newGym });

      // reset form
      this.newGym = { id: 0, name: '', location: '', equipment: [] };
      
      this.selectedEquipment = {};
      
    }
  }
}