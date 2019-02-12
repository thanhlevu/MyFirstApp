import { Pipe, PipeTransform } from "@angular/core";
import { MediaProvider } from "../../providers/media/media.provider";
import { IPicture2 } from "../../interfaces/pic2";
/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "thumbnail"
})
export class ThumbnailPipe implements PipeTransform {
  private thumbnail = "";
  private cachedID;

  constructor(public mediaProvider: MediaProvider) {}

  async transform(id: string, ...args) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getSingleMedia(id).subscribe((res: IPicture2) => {
        switch (args[0]) {
          case "large":
            resolve(res.thumbnails.w640);
            break;
          case "medium":
            resolve(res.thumbnails.w320);
            break;
          case "small":
            resolve(res.thumbnails.w160);
            break;
          case "screenshot":
            resolve(res.screenshot);
            break;
        }
      });
    });
  }
}
