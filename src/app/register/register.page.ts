import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: string = '';
  email: string = '';
  ph: string = '';
  birth: string = '';
  pw: string = '';

  

  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  navToHome() {
    console.log(this.user);
    console.log(this.email);
    console.log(this.ph);
    console.log(this.birth);
    console.log(this.pw);
    this.navCtrl.navigateForward("home");
  }

}
