import { SuccessfulClaimComponent } from '../claims/successful-claim/successful-claim.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-preview-file',
  templateUrl: './preview-file.component.html',
  styleUrls: ['./preview-file.component.css']
})
export class PreviewFileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private domSanitizer: DomSanitizer) { }
  imageUrl:SafeResourceUrl =[];

  ngOnInit(): void {
  }

  previewFile(file:any){
    let base64str=file.base64;
    var win:any = window.open();
    win.document.write('<iframe src="' + base64str  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }

}
