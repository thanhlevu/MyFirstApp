import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginRegisterPage } from "../login-register/login-register";
import { LogoutPage } from "../logout/logout";
import { NgModule } from "@angular/core";

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  tab1Root = LoginRegisterPage;
  tab2Root = HomePage;
  tab3Root = LogoutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }

  login() {
    this.navCtrl.push(LoginRegisterPage);
  }
  home() {
    this.navCtrl.push(HomePage);
  }
  logout() {
    this.navCtrl.push(LogoutPage);
  }
}
