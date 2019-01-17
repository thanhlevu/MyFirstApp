import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { IPicture } from "../../interfaces/pic";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  picArray: IPicture[];

  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    return this.http
      .get<IPicture[]>("../../assets/test.json")
      .subscribe(data => {
        console.log(data);
        this.picArray = data;
      });
  }

  viewImage(url: string) {
    this.photoViewer.show(url);
  }
}
