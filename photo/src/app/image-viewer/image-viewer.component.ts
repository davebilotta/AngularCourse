import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  url = '';
  altText = 'Alt Text';

  constructor(private imageService: ImageService) {

  }

  ngOnInit(): void {
  }

  getImage() {
    this.imageService.getImage().subscribe(
      (response) => {
        this.url = response.urls.small;
        this.altText = response.alt_description;
      }
    )
  }


}
