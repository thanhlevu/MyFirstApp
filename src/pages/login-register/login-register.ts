import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgModule } from "@angular/core";
import { HomePage } from "../home/home";
import { Http, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { User, LoginResponse, UsernameResponse } from "../../interfaces/pic2";
import { MediaProvider } from "../../providers/media/media.provider";

@IonicPage()
@Component({
  selector: "page-login-register",
  templateUrl: "login-register.html"
})
export class LoginRegisterPage {
  user: User = { username: null };
  onRegister = false;
  //   username = "";
  //   password = "";
  constructor(
    public mediaprovider: MediaProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}
  ngOnInit() {
    this.checkLogin();
  }
  checkLogin() {
    if (localStorage.getItem("token")) {
      this.navCtrl.push(HomePage);
    }
  }
  loginClicked(form) {
    // this.mediaprovider.login(this.user).subscribe(
    //   (response: LoginResponse) => {
    //     console.log("response");
    //     console.log(response);
    //     localStorage.setItem("token", response.token);
    //     this.navCtrl.push(HomePage);
    //     this.mediaprovider.token = response.token;
    //     this.mediaprovider.loggedIn = true;
    //     this.mediaprovider.user_id = response.user.user_id;
    //     console.log("user.id: " + this.mediaprovider.user_id);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    console.log(form);
  }
  //thanhvl@metropolia.fi

  registerClicked(form) {
    console.log(form);

    // this.mediaprovider.checkIfUserExists(this.user).subscribe(
    //   (response: UsernameResponse) => {
    //     console.log(response);
    //     if (response.available) {
    //       this.mediaprovider.register(this.user).subscribe(
    //         (response: LoginResponse) => {
    //           localStorage.setItem("token", response.token);
    //           this.navCtrl.push(HomePage);
    //           console.log(response);
    //         },
    //         error => {
    //           console.log(error);
    //         }
    //       );
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  openRegisterForm() {
    this.onRegister = true;
    this.user.username = null;
  }

  checkUsername() {
    if (this.user.username != null) {
      this.mediaprovider.checkIfUserExists(this.user).subscribe(
        (response: UsernameResponse) => {
          console.log(response);
          if (!response.available) {
            alert("this username is not available!");
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert("please, enter the username");
    }
  }

  confirmPassword() {
    if (this.user.password !== this.user.password2) {
      alert(
        "passwords do not match.." +
          this.user.password +
          ":" +
          this.user.password2
      );
    }
  }
}
