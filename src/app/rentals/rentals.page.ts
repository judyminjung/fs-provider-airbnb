import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.page.html',
  styleUrls: ['./rentals.page.scss'],
})


export class RentalsPage{


  constructor(
    private navCtrl: NavController
  ) {}

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }


  ngOnInit() {
  }

}
