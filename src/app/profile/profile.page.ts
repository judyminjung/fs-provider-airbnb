import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  navToRentals() {
    this.navCtrl.navigateForward("rentals");
  }

  navToNew() {
    this.navCtrl.navigateForward("new");
  }

}
