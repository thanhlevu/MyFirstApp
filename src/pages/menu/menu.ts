import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginRegisterPage } from "../login-register/login-register";
import { ProfilePage } from "../profile/profile";
import { NgModule } from "@angular/core";
import { MediaProvider } from "../../providers/media/media.provider";

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  tab1Root = LoginRegisterPage;
  tab2Root = HomePage;
  tab3Root = ProfilePage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }

  //   login() {
  //     this.navCtrl.push(LoginRegisterPage);
  //   }
  //   home() {
  //     this.navCtrl.push(HomePage);
  //   }
  //   logout() {
  //     this.navCtrl.push(LogoutPage);
  //   }
}
