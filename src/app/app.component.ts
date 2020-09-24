import { Goal } from './goal';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  goals: Goal[] = []
}
  //   {id:1, name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
  //     {id:2, name:'Buy Cookies', description:'I have to buy cookies for the parrot'},
  //     {id:3, name:'Get new Phone Case', description:'Diana has her birthday coming up soon'},
  //     {id:4, name:'Get Dog Food', description:'Pupper likes expensive sancks'},
  //     {id:5, name:'Solve math homework', description:'Damn Math'},
  //     {id:6, name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];
  // toggleDetails(index){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }

  // constructor() { }

  // ngOnInit() {
  // }