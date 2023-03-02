import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageDto } from '@alexxio1989/ap-fe-core';
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-images-editor',
  templateUrl: './images-editor.component.html',
  styleUrls: ['./images-editor.component.scss'],
})
export class ImagesEditorComponent implements OnInit {
  @Input() images: ImageDto[] = [];
  @Output() imagesEmitter = new EventEmitter<ImageDto[]>();
  imgSelected: ImageDto;
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event: any , img:ImageDto): void {
    img.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent , img:ImageDto) {
    img.base64 = event.base64;
    console.log(event, base64ToFile(event.base64));
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions , img:ImageDto) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH,
    };
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH,
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV,
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation,
    };
  }

  addAction() {
    let newImg = new ImageDto()
    this.images.push(newImg)
  }

  emit() {
    this.imagesEmitter.emit(this.images);
  }
}