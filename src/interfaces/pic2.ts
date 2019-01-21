export interface IPicture2 {
  filename: string;
  title: string;
  description: string;
  file_id: string;
  filesize: string;
  media_type: string;
  mime_type: string;
  time_added: string;
  user_id: string;
  thumbnails?: Thumbnail;
  screenshot?: string;
}

export interface Thumbnail {
  160: string;
  320?: string;
  640?: string;
}
