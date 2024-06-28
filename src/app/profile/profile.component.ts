import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User/user.service';
import { HttpClientModule } from '@angular/common/http';
import { IUser } from '../Models Angular/User';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ HttpClientModule, ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private userSevice:UserService) { }

  allUsers:IUser[]=[]
  selectedUser!:IUser;

  userName!:string 
  userHandle!:string
  userWebsite!:string
  catchPhrase!:string
  userAddress!:string


  ngOnInit(): void {

    this.userSevice.getAllUsers().subscribe(users => {
      this.allUsers = users;

     
      this.userName = this.allUsers[0].name;
      this.userHandle = this.allUsers[0].username;
      this.userWebsite = this.allUsers[0].website;
      this.catchPhrase = this.allUsers[0].company.catchPhrase;
      this.userAddress = this.allUsers[0].address.street 
    })

  }


  loadUserData(userid:number){
   // console.log(userid);
    const user = this.allUsers.find(u => u.id === userid);
    //console.log(user);

    if (user) {
      this.selectedUser = user;
      this.userName = user.name;
      this.userHandle = user.username;
      this.userWebsite = user.website;
      this.catchPhrase = user.company.catchPhrase;
      this.userAddress = user.address.street 

    } else {
      console.error("User not found");
    }
  
  }  

}
