import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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
    availableRooms: 10,
    bookedRooms: 15,
  };

  roomList : RoomList[] = [
    {
      roomNumber : 1,
      roomType : 'Deluxe Room',
      amenities : 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price : 500,
      photos : 'https://unsplash.com/photos/odxB5oIG_iA',
      checkInTime : new Date('19-Nov-2021'),
      checkOutTime : new Date('29-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber : 2,
      roomType : 'Deluxe Room',
      amenities : 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price : 1000,
      photos : 'https://unsplash.com/photos/odxB5oIG_iA',
      checkInTime : new Date('19-Nov-2021'),
      checkOutTime : new Date('29-Nov-2021'),
      rating: 3.4
    },
    {
      roomNumber : 3,
      roomType : 'Private Suite',
      amenities : 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price : 1500,
      photos : 'https://unsplash.com/photos/odxB5oIG_iA',
      checkInTime : new Date('19-Nov-2021'),
      checkOutTime : new Date('29-Nov-2021'),
      rating: 2.6865375
    }
  ]

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}

