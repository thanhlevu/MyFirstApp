import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MediaProvider } from "../../providers/media/media.provider";
import { LoginRegisterPage } from "../login-register/login-register";
import { User } from "../../interfaces/pic2";
import { TagsResponse } from "../../interfaces/pic2";
import { IPicture2 } from "../../interfaces/pic2";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  email: string;
  fulfname: string;
  user_id: number;
  username: string;
  avatar: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  //   ionViewWillEnter() {
  //     localStorage.clear();
  //     console.log(this.mediaProvider.loggedIn);
  //     this.mediaProvider.loggedIn = false;
  //     console.log("Cleared!");
  //   }

  //   ionViewDidEnter() {
  //     this.navCtrl.setRoot(LoginRegisterPage);
  //   }

  ngOnInit() {
    this.mediaProvider.getUsersInfo().subscribe((data: User) => {
      this.email = data.email;
      this.fulfname = data.full_name;
      this.user_id = data.user_id;
      this.username = data.username;
      this.mediaProvider.getAvatar().subscribe((ava: TagsResponse[]) => {
        console.log(ava);

        ava.filter(a => {
          console.log(a.user_id, this.user_id);
          if (a.user_id === this.user_id) {
            this.avatar = a.filename;
          }
        });
      });
    });
  }

  logOut() {
    localStorage.clear();
    console.log(this.mediaProvider.loggedIn);
    this.mediaProvider.loggedIn = false;
    console.log("Cleared!");
    this.navCtrl.setRoot(LoginRegisterPage);
  }
}
