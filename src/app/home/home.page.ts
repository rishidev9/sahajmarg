import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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
  isCategory: any = false;
  categories: any=[];
  currentUrl: any ='';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if(this.id === 'BabujiBooks' || this.id === 'BabujiAudioBooks' || this.id === 'BabujiAssociatesBooks'  ) {
      this.isCategory = true;
      this.getCategories(this.id);
      return
    }
    this.getFiles(this.id);
  }
  
  getCategories(id: any) {
    if (id === 'BabujiBooks') {
      this.categories = [
        {
          name: 'Telugu',
          id : "/Babuji%20Books\/Telugu"
        },
        {
          name: 'Hindi',
          id : "/Babuji%20Books\/Hindi"
        },
        {
          name: 'English',
          id : "/Babuji%20Books\/English"
        }
      ]
    }
    if (id === 'BabujiAudioBooks') {
      this.categories = [
        {
          name: 'Babuji English Audio Books',
          id : "BabujiEnglishAudioBooks"
        },
        {
          name: 'Babuji Telugu Audio Books',
          id : "BabujiTeluguAudioBooks"
        },
        {
          name: 'Saint Kasturi Songs',
          id : "saint%20kasturi%20audio"
        }
      ]
    }
    if (id === 'BabujiAssociatesBooks') {
      this.categories = [
        {
          name: 'Saint Kasturi',
          id : "Kasturi%20New%20Books"
        },
        {
          name: 'Spiritual correspondence with Babuji',
          id : "Spiritual%20correspondence%20with%20Babuji"
        }
      ]
    }
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getFiles(id: any){
    this.categories = [];
    this.files = this.data.getFilesById(id);
    console.log(this.files);
    if (this.files.length > 0 && this.files[0].url.includes('.pdf')) {
      this.type = 'pdf';
    }
    if (this.files.length > 0 && this.files[0].url.includes('.mp3')) {
      this.type = 'audio';
    }
    if (this.files.length > 0 && this.files[0].url.includes('.mp4')) {
      this.type = 'video';
    }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  isIos() {
    return this.platform.is('ios')
  }

  async openUrl(fileurl: string) {

    if(fileurl.includes('youtube')) {
      const url = fileurl;
      await Browser.open({ url,
      windowName: '_system', // This ensures it opens in the system's default browser
      toolbarColor: '#FFFFFF', // Optional: customize toolbar color
      presentationStyle: 'popover', // Optional: customize presentation style
     });
     return
    }
    // this.currentUrl = '';
    if (this.type === 'audio' || this.type === 'video') {
      this.currentUrl = fileurl;
      console.log(fileurl);
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.load(); // Reload the video element
      }
      return
    }
    const url = "https://docs.google.com/viewerng/viewer?url=" + fileurl;
    await Browser.open({ url,
    windowName: '_system', // This ensures it opens in the system's default browser
    toolbarColor: '#FFFFFF', // Optional: customize toolbar color
    presentationStyle: 'popover', // Optional: customize presentation style
   });
  }

}
