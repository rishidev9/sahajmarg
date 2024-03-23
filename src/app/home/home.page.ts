import { Component, OnInit, inject } from '@angular/core';
import { Platform, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  id: any
  private platform = inject(Platform);
  type: any;
  files: any;
  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getFiles();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getFiles(){
    this.files = this.data.getFilesById(this.id);
    console.log(this.files);
    // if (this.files.length > 0 && this.files[0].includes('.pdf')) {
    //   this.type = 'pdf';
    // }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  isIos() {
    return this.platform.is('ios')
  }

  async openPdfUrl(pdfUrl: string) {
    await Browser.open({ url: pdfUrl });
  }

}
