import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MediaProvider } from "../../providers/media/media.provider";
import { LoginRegisterPage } from "../login-register/login-register";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewWillEnter() {
    localStorage.clear();
    console.log(this.mediaProvider.loggedIn);
    this.mediaProvider.loggedIn = false;
    console.log("Cleared!");
  }

  ionViewDidEnter() {
    this.navCtrl.setRoot(LoginRegisterPage);
  }
  ngOnInit() {}
}
