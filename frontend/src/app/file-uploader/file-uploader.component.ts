import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { sharedService } from '../services/sharedService.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit{

  constructor(private dialog: MatDialog, private http: HttpClient, private sharedService: sharedService){}
  @Output() updatedFiles  = new EventEmitter<{ files  }>();
  display: FormControl = new FormControl("", Validators.required);
  fileType: FormControl = new FormControl("", Validators.required);
  file_store: any;
  addedFile ;
  file_list  = [];
  file_test =[];
  imageUrl ;
  
  fileTypes = ['Aмбулаторен лист','Mедицинско направление','Платежен документ', 'Резултати от изследване', 'Епикриза', 'Процедурен картон', 'Ренегнография'];

  ngOnInit(): void {
    this.file_store =[];
  }

  handleFileInputChange(l: any): void {
    this.addedFile = l;
    // this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }

  handleSubmit(): void {
   var fd=new FormData();
    this.file_store.push({file:this.addedFile[0], type:this.fileType.value});
    this.file_list.push({name:this.addedFile[0].name, type:this.fileType.value});

    // this.file_list = [];
    // for (let i = 0; i < this.file_store.length; i++) {
    //   fd.append("files", this.file_store[i].file, this.file_store[i].file.name);
    // }
   this.updateFiles();
    // do submit ajax
  }

  previewFile(i ){
    this.sharedService.previewFile(this.file_store[i].file)
  }

  convertToBase64(url: string) {
    this.http.get(url, { responseType: "blob" }).subscribe(blob => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        //Here you can do whatever you want with the base64 String
        console.log("File in Base64: ", event.target.result);
      };

      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
      };
    });
}
  

  removeFile(removedFileIndex ){
    this.file_list.splice(removedFileIndex, 1);
    this.file_store.splice(removedFileIndex, 1);
    this.updateFiles();
  }

  updateFiles(){
    var fd=new FormData();
    this.file_test = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append("files", this.file_store[i].file, this.file_store[i].file.name);
      this.file_test.push(this.file_store[i].file)
    }
    this.updatedFiles.emit({ files: this.file_store });
  }
  
  
}

