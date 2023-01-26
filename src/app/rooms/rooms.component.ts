import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel"
  numberOfRooms = 34;
  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 15,
  };


  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}

