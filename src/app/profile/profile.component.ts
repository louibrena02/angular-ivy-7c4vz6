import { Component, VERSION  } from "@angular/core";

@Component({
  selector: "profile",
  templateUrl:"./profile.component.html",
  styleUrls:["./profile.component.css"]
)}
export class ProfileComponent {
  name = "Angular" + VERSION.major;
}