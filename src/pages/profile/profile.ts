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
  avatar = "";
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
      this.mediaProvider.getAvatars().subscribe((avatars: TagsResponse[]) => {
        console.log(avatars);

        avatars.filter(avatar => {
          if (avatar.user_id === this.user_id) {
            this.avatar = avatar.filename;
            console.log(avatar.user_id, this.user_id);
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
    this.navCtrl.push(LoginRegisterPage);
  }
}
