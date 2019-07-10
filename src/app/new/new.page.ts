import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  navToRentals() {
    this.navCtrl.navigateForward("rentals");
  }

}
