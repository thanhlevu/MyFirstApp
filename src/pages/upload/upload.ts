import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { Observable, Subject, ReplaySubject } from "rxjs";
import { map, filter, switchMap } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IPicture2, UploadForm } from "../../interfaces/pic2";
import { MediaProvider } from "../../providers/media/media.provider";
@IonicPage()
@Component({
  selector: "page-upload",
  templateUrl: "upload.html"
})
export class UploadPage {
  picture: any;
  uploadForm: UploadForm = {};
  fileData = "";
  file: File;
  title = "";
  description = "";
  formData = new FormData();
  src = "https://media.mw.metropolia.fi/wbma";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UploadPage");
  }

  handleChange($event) {
    console.log($event.target.files[0]);
    this.file = $event.target.files[0];

    this.showPreview();

    // this.formData.append("file", this.fileData);
    // this.formData.append("title", this.picture.title);
    // this.formData.append("description", this.picture.description);
  }

  showPreview() {
    var reader = new FileReader();
    reader.onloadend = evt => {
      //using arrow fuction to change the reference, if not ==> error of this.
      //console.log(reader.result)
      this.fileData = reader.result;
    };
    reader.readAsDataURL(this.file);
    // this.mediaProvider.getAvatars().subscribe((avatars: TagsResponse[]) => {}
  }

  uploadImage(formData) {
    //show spinner
    const fd = new FormData();
    fd.append("file", this.fileData);
    fd.append("title", this.title);
    fd.append("description", this.description);
    this.mediaProvider.upload(formData).subscribe(res => {
      //set time out in 2s
      console.log(res);
      this.navCtrl.pop().catch();
      // hide spinner
    });
  }

  ionDViewDidEnter() {}
}
