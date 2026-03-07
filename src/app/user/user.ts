import { Component, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FlightService } from '../services/flight.service';
import { Loading } from "../loading/loading";

@Component({
  selector: 'app-user',
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    Loading
],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  public activeUser = AuthService.getActiveUser()
  destinations = signal<string[]>([])

  constructor(private router: Router){
    if(!AuthService.getActiveUser()){
      router.navigate(['/login'])
    }

    FlightService.getDestinations()
    .then(rsp=> this.destinations.set(rsp.data))
  }

  updateUser(){
    AuthService.updateActiveUser(this.activeUser!)
    alert('User updated seccessfuly!')
  }
}
