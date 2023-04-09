import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ConverterService {
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  readBase64FromInput(input: any): Promise<string | ArrayBuffer | SafeHtml | null> {
    return new Promise((resolve) => {
      const inputValue = input.target
      const file: File = inputValue.files[0];
      const myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        resolve(myReader.result)
      }
      myReader.readAsDataURL(file);
    })
  }

  readFileFromInput(input: any): Promise<File> {
    return new Promise((resolve) => {
      const inputValue = input.target
      const file: File = inputValue.files[0];
      resolve(file)
    });
  }

  readBlobFromInput(input: any): Promise<string | ArrayBuffer | SafeHtml> {
    return new Promise((resolve) => {
      const inputValue = input.target
      const file: File = inputValue.files[0];
      resolve(this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)))
    })
  }

  createBlob(blob: any) {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))
  }

  convertBlobToBase64(blob: any): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve) => {
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        resolve(myReader.result)
      }
      myReader.readAsDataURL(blob);
    });
  }

  convertBase64ToFile(imageData: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;charset=utf-8;base64,' + imageData);
  }
}
