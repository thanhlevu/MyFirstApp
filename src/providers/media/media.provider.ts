import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { IPicture2, User, LoginResponse } from "../../interfaces/pic2";

@Injectable()
export class MediaProvider {
  configUrl = "https://media.mw.metropolia.fi/wbma";
  picArray: IPicture2[];
  loggedIn = false;
  constructor(public http: HttpClient) {
    console.log("Hello MediaProvider Provider");
  }

  getAllMedia() {
    return this.http.get<IPicture2[]>(this.configUrl + "/media");
  }

  getSingleMedia(id) {
    return this.http.get<IPicture2>(this.configUrl + "/media/" + id);
  }

  onRegister(formValues) {
    const url = "http://media.mw.metropolia.fi/wbma/users";

    this.http.post(url, formValues).subscribe(status => {
      alert(status["message"]);
    });
  }

  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    return this.http.post<LoginResponse>(
      this.configUrl + "/login",
      user,
      httpOptions
    );
  }
  register(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    return this.http.post<LoginResponse>(
      this.configUrl + "/users",
      user,
      httpOptions
    );
  }
  checkIfUserExists(user: User) {
    return this.http.get(this.configUrl + "/users/username/" + user.username);
  }
}
