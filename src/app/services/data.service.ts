import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  Data: any = [
 {
  "name": "Aroma-of-Divine-Duality",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/Aroma-of-Divine-Duality.pdf"
 },
 {
  "name": "Autobiography_of-Lalaji",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/Autobiography_of-Lalaji.pdf"
 },
 {
  "name": "RAM-CHANDRA-SCHOOL-OF-ESOTERICISM",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/RAM-CHANDRA-SCHOOL-OF-ESOTERICISM.pdf"
 },
 {
  "name": "Tattva_Prabodhini",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/Tattva_Prabodhini.pdf"
 },
 {
  "name": "Truth_Eternal",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/Truth_Eternal.pdf"
 },
 {
  "name": "HimalayanTradition",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/HimalayanTradition.pdf"
 },
 {
  "name": "Kamaal_Insani",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/Kamaal_Insani.pdf"
 },
 {
  "name": "అనంతవాణి.",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF.pdf"
 },
 {
  "name": "తత్వజ్ఞానం.",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Lalaji%20Books\/%E0%B0%A4%E0%B0%A4%E0%B1%8D%E0%B0%B5%E0%B0%9C%E0%B1%8D%E0%B0%9E%E0%B0%BE%E0%B0%A8%E0%B0%82.pdf"
 },
 {
  "name": "దశాదేశములు",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/10-commendments-1.pdf"
 },
 {
  "name": "అభ్యాసిపాత్ర",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Abyasi-Paatra.pdf"
 },
 {
  "name": "రాజయోగ ప్రభావము",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Rajayogamu.pdf"
 },
 {
  "name": "ఋతవాణి-2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/RUTHAWANI-2.pdf"
 },
 {
  "name": "ఋతవాణి",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/ruthuvani-telugu-2.pdf"
 },
 {
  "name": "సహజ మార్గదర్శనము",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Sahaja-Marga-Darshanam.pdf"
 },
 {
  "name": "సత్యోదయం",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Satyodayamu.pdf"
 },
 {
  "name": "అనంతము వైపు",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Towards-infinity.pdf"
 },
 {
  "name": "రామచంద్రుని సందేశాలు",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/Universal-messages.pdf"
 },
 {
  "name": "శ్రీ_రామచంద్రుని-స్వీయచరిత్ర-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80_%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B1%81%E0%B0%A8%E0%B0%BF-%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-1.pdf"
 },
 {
  "name": "శ్రీ-రామచంద్రుని-స్వీయచరిత్ర-2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Telugu\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80-%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B1%81%E0%B0%A8%E0%B0%BF-%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-2.pdf"
 },
 {
  "name": "3-in-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/3-in-1.pdf"
 },
 {
  "name": "AAmne-Saamne",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/AAmne-Saamne.pdf"
 },
 {
  "name": "Atmkatha-2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Atmkatha-2.pdf"
 },
 {
  "name": "Divya-Adesh-Part-4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Divya-Adesh-Part-4.pdf"
 },
 {
  "name": "Divya-Adesh-Part-5",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Divya-Adesh-Part-5.pdf"
 },
 {
  "name": "Divya-Adesh-Part-6",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Divya-Adesh-Part-6.pdf"
 },
 {
  "name": "Divya-Adesh-Part-7",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Divya-Adesh-Part-7.pdf"
 },
 {
  "name": "Divya-Adesh-Part-8",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Divya-Adesh-Part-8.pdf"
 },
 {
  "name": "sahaj-Kavya",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/sahaj-Kavya.pdf"
 },
 {
  "name": "Satya-ka-uday",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Satya-ka-uday.pdf"
 },
 {
  "name": "Tatva-Gyan",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/Tatva-Gyan.pdf"
 },
 {
  "name": "Akchher satya",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Akchher%20satya.pdf"
 },
 {
  "name": "Anant Ki Or",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Anant%20Ki%20Or.pdf"
 },
 {
  "name": "Atmkatha",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Atmkatha.pdf"
 },
 {
  "name": "Divya Adesh Part 1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Divya%20Adesh%20Part%201.pdf"
 },
 {
  "name": "Divya Adesh Part 2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Divya%20Adesh%20Part%202.pdf"
 },
 {
  "name": "Divya Adesh Part 3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Divya%20Adesh%20Part%203.pdf"
 },
 {
  "name": "Divya desh ka darshan",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Divya%20desh%20ka%20darshan.pdf"
 },
 {
  "name": "Divya Sandesh",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Divya%20Sandesh.pdf"
 },
 {
  "name": "Dus usoolon ki sharah",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Dus%20usoolon%20ki%20sharah.pdf"
 },
 {
  "name": "Haqikat Benakab",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Haqikat%20Benakab.pdf"
 },
 {
  "name": "Rajyog ka divya darshan",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Rajyog%20ka%20divya%20darshan.pdf"
 },
 {
  "name": "Ritvani Part 1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Ritvani%20Part%201.pdf"
 },
 {
  "name": "Ritvani Part 2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Ritvani%20Part%202.pdf"
 },
 {
  "name": "Sahaj Marg Darshan",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Sahaj%20Marg%20Darshan.pdf"
 },
 {
  "name": "Sahajmarg ki ek jhalak",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/Hindi\/new\/Sahajmarg%20ki%20ek%20jhalak.pdf"
 },
 {
  "name": "Commentary_on_Ten_Maxims_of_S.M",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Commentary_on_Ten_Maxims_of_S.M..pdf"
 },
 {
  "name": "Commentary_Ten_Commandments_of_S.M",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Commentary_Ten_Commandments_of_S.M..pdf"
 },
 {
  "name": "Efficacity_of_Raja_Yoga",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Efficacity_of_Raja_Yoga.pdf"
 },
 {
  "name": "Reality_at_Dawn",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Reality_at_Dawn.pdf"
 },
 {
  "name": "Role_of_the_AbhyasiI_in_Sahaj_Marg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Role_of_the_AbhyasiI_in_Sahaj_Marg.pdf"
 },
 {
  "name": "Sahaj_Marg_Philosophy",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Sahaj_Marg_Philosophy.pdf"
 },
 {
  "name": "Towards-Infinity",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Towards-Infinity.pdf"
 },
 {
  "name": "voice-real-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/voice-real-1.pdf"
 },
 {
  "name": "Voice_Real_2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Babuji%20Books\/English\/Voice_Real_2.pdf"
 },
 {
  "name": "1-PREPARATION-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/1-PREPARATION-1.pdf"
 },
 {
  "name": "2-CONTRIBUTION-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/2-CONTRIBUTION-1.pdf"
 },
 {
  "name": "3-EARLY YEARS-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/3-EARLY%20YEARS-1.pdf"
 },
 {
  "name": "4-DECLARATION-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/4-DECLARATION-1.pdf"
 },
 {
  "name": "Auto graphy 1928-1944.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Auto%20graphy%201928-1944.pdf"
 },
 {
  "name": "autobiography of r.c. ii vol 1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/autobiography%20of%20r.c.%20ii%20vol%201.pdf"
 },
 {
  "name": "autobiography of r.c. ii vol 2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/autobiography%20of%20r.c.%20ii%20vol%202.pdf"
 },
 {
  "name": "autobiography of r.c. ii vol 3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/autobiography%20of%20r.c.%20ii%20vol%203.pdf"
 },
 {
  "name": "Revelations of Budha.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Revelations%20of%20Budha.pdf"
 },
 {
  "name": "REVELATIONS OF LALAJI MAHARAG.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/REVELATIONS%20OF%20LALAJI%20MAHARAG.pdf"
 },
 {
  "name": "Revelations of Sri Krishna Bhagavan.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Revelations%20of%20Sri%20Krishna%20Bhagavan.pdf"
 },
 {
  "name": "Revelations of Swami Vivekanada.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Revelations%20of%20Swami%20Vivekanada.pdf"
 },
 {
  "name": "Tamil-Shri Ramchandraji Autobiography in Tamil Vol.  2 Part 3 (1).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Tamil-Shri%20Ramchandraji%20Autobiography%20in%20Tamil%20Vol.%20%202%20Part%203%20(1).pdf"
 },
 {
  "name": "Tamil-Shri Ramchandraji Autobiography in Tamil Vol.  2 Part 3 (2).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Tamil-Shri%20Ramchandraji%20Autobiography%20in%20Tamil%20Vol.%20%202%20Part%203%20(2).pdf"
 },
 {
  "name": "Tamil-Shri Ramchandraji Autobiography in Tamil Vol.  2 Part 3 (3).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Tamil-Shri%20Ramchandraji%20Autobiography%20in%20Tamil%20Vol.%20%202%20Part%203%20(3).pdf"
 },
 {
  "name": "Tamil-Shri Ramchandraji Autobiography in Tamil Vol.  2 Part 3 (4).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/Tamil-Shri%20Ramchandraji%20Autobiography%20in%20Tamil%20Vol.%20%202%20Part%203%20(4).pdf"
 },
 {
  "name": "పూజ్య శ్రీకృష్ణ భగవానుడు.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%AA%E0%B1%82%E0%B0%9C%E0%B1%8D%E0%B0%AF%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%95%E0%B1%83%E0%B0%B7%E0%B1%8D%E0%B0%A3%20%E0%B0%AD%E0%B0%97%E0%B0%B5%E0%B0%BE%E0%B0%A8%E0%B1%81%E0%B0%A1%E0%B1%81.pdf"
 },
 {
  "name": "పూజ్య స్వామి వివేకానoదజీ.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%AA%E0%B1%82%E0%B0%9C%E0%B1%8D%E0%B0%AF%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%AE%E0%B0%BF%20%E0%B0%B5%E0%B0%BF%E0%B0%B5%E0%B1%87%E0%B0%95%E0%B0%BE%E0%B0%A8o%E0%B0%A6%E0%B0%9C%E0%B1%80.pdf"
 },
 {
  "name": "పూజ్యు బుద్ధ భగవానుడు మహఋషులు.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%AA%E0%B1%82%E0%B0%9C%E0%B1%8D%E0%B0%AF%E0%B1%81%20%E0%B0%AC%E0%B1%81%E0%B0%A6%E0%B1%8D%E0%B0%A7%20%E0%B0%AD%E0%B0%97%E0%B0%B5%E0%B0%BE%E0%B0%A8%E0%B1%81%E0%B0%A1%E0%B1%81%20%E0%B0%AE%E0%B0%B9%E0%B0%8B%E0%B0%B7%E0%B1%81%E0%B0%B2%E0%B1%81.pdf"
 },
 {
  "name": "పూజ్యుగౌరవనీయులైనగురుదేవులు.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%AA%E0%B1%82%E0%B0%9C%E0%B1%8D%E0%B0%AF%E0%B1%81%E0%B0%97%E0%B1%8C%E0%B0%B0%E0%B0%B5%E0%B0%A8%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B1%88%E0%B0%A8%E0%B0%97%E0%B1%81%E0%B0%B0%E0%B1%81%E0%B0%A6%E0%B1%87%E0%B0%B5%E0%B1%81%E0%B0%B2%E0%B1%81.pdf"
 },
 {
  "name": "శ్రీ_రామచంద్రుని-స్వీయచరిత్ర-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80_%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B1%81%E0%B0%A8%E0%B0%BF-%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-1.pdf"
 },
 {
  "name": "శ్రీ-రామచంద్రుని-స్వీయచరిత్ర-2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80-%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B1%81%E0%B0%A8%E0%B0%BF-%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-2.pdf"
 },
 {
  "name": "శ్రీరామచంద్రజీ స్వీయచరిత్ర- 3 భాగము.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B0%9C%E0%B1%80%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-%203%20%E0%B0%AD%E0%B0%BE%E0%B0%97%E0%B0%AE%E0%B1%81.pdf"
 },
 {
  "name": "శ్రీరామచంద్రజీ స్వీయచరిత్ర- 4 భాగము.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B0%9C%E0%B1%80%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-%204%20%E0%B0%AD%E0%B0%BE%E0%B0%97%E0%B0%AE%E0%B1%81.pdf"
 },
 {
  "name": "శ్రీరామచంద్రజీ స్వీయచరిత్ర-1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B0%9C%E0%B1%80%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-1.pdf"
 },
 {
  "name": "శ్రీరామచంద్రజీ స్వీయచరిత్ర-2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Autobiography\/Autobiography_2024\/%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%E0%B0%B0%E0%B0%BE%E0%B0%AE%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B1%8D%E0%B0%B0%E0%B0%9C%E0%B1%80%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0-2.pdf"
 },
 {
  "name": "Talks with Saint Kasturi - 2002; compiled by Sister Denise Mincet",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/Talks%20with%20Saint%20Kasturi%20-%202002;%20compiled%20by%20Sister%20Denise%20Mincet.pdf"
 },
 {
  "name": "అనంత యాత్ర - 5",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%20%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%B0%20-%205.pdf"
 },
 {
  "name": "అనంత యాత్ర -1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%20%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%B0%20-1.pdf"
 },
 {
  "name": "అనంత యాత్ర -2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%20%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%B0%20-2.pdf"
 },
 {
  "name": "అనంత యాత్ర -3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%20%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%B0%20-3.pdf"
 },
 {
  "name": "అనంత యాత్ర -4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%20%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%B0-4.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 1999",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-%201999.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 2001",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-%202001.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 2002",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-%202002.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 2004",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-%202004.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 2006",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-%202006.pdf"
 },
 {
  "name": "ఆణిముత్యాలు - 2009",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81%20-2008.pdf"
 },
 {
  "name": "ఆణిముత్యాలు- 1997 & సహజ సమాధి",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81-%201997%20&%20%E0%B0%B8%E0%B0%B9%E0%B0%9C%20%E0%B0%B8%E0%B0%AE%E0%B0%BE%E0%B0%A7%E0%B0%BF.pdf"
 },
 {
  "name": "ఆణిముత్యాలు- 2000",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81-%202000.pdf"
 },
 {
  "name": "ఆణిముత్యాలు- 2003",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%86%E0%B0%A3%E0%B0%BF%E0%B0%AE%E0%B1%81%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81-%202003.pdf"
 },
 {
  "name": "దైవీయ గ్రంధి దర్పణం",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%A6%E0%B1%88%E0%B0%B5%E0%B1%80%E0%B0%AF%20%E0%B0%97%E0%B1%8D%E0%B0%B0%E0%B0%82%E0%B0%A7%E0%B0%BF%20%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%AA%E0%B0%A3%E0%B0%82.pdf"
 },
 {
  "name": "బాబూజీ మహరాజ్",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%AC%E0%B0%BE%E0%B0%AC%E0%B1%82%E0%B0%9C%E0%B1%80%20%E0%B0%AE%E0%B0%B9%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B1%8D.pdf"
 },
 {
  "name": "మహనీయులై గువర్యులు",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%AE%E0%B0%B9%E0%B0%A8%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B1%88%20%E0%B0%97%E0%B1%81%E0%B0%B5%E0%B0%B0%E0%B1%8D%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B1%81.pdf"
 },
 {
  "name": "మాష్టర్ గారి సందేశాలు",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%AE%E0%B0%BE%E0%B0%B7%E0%B1%8D%E0%B0%9F%E0%B0%B0%E0%B1%8D%20%E0%B0%97%E0%B0%BE%E0%B0%B0%E0%B0%BF%20%E0%B0%B8%E0%B0%82%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%BE%E0%B0%B2%E0%B1%81.pdf"
 },
 {
  "name": "సహజ మార్గ దశనియమాల దివ్య సౌందర్యం",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Kasturi%20New%20Books\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%20%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97%20%E0%B0%A6%E0%B0%B6%E0%B0%A8%E0%B0%BF%E0%B0%AF%E0%B0%AE%E0%B0%BE%E0%B0%B2%20%E0%B0%A6%E0%B0%BF%E0%B0%B5%E0%B1%8D%E0%B0%AF%20%E0%B0%B8%E0%B1%8C%E0%B0%82%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%AF%E0%B0%82.pdf"
 },
 {
  "name": "a-peep-into-sahaj-marga",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/a-peep-into-sahaj-marga.pdf"
 },
 {
  "name": "letters-to-mr.-andre-poray",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/letters-to-mr.-andre-poray.pdf"
 },
 {
  "name": "letters-to-ragavendra-rao",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/letters-to-ragavendra-rao.pdf"
 },
 {
  "name": "letters-to-toni-bernardi",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/letters-to-toni-bernardi.pdf"
 },
 {
  "name": "Letters_to_Kumaraswamy",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/Letters_to_Kumaraswamy.pdf"
 },
 {
  "name": "Letters_to_Sarnad_-Divya_Sandesha",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/Letters_to_Sarnad_-Divya_Sandesha.pdf"
 },
 {
  "name": "saying-thus-speak-by-sarnad",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Associates%20Books\/Spiritual%20correspondence%20with%20Babuji\/saying-thus-speak-by-sarnad.pdf"
 },
 {
  "name": "01-Divine-Light",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/01-Divine-Light.mp3"
 },
 {
  "name": "15-Curvature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/15-Curvature.mp3"
 },
 {
  "name": "29-Powers-of-Nature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/29-Powers-of-Nature.mp3"
 },
 {
  "name": "43-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/43-Q-A.mp3"
 },
 {
  "name": "57-Tasteless-Taste.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/57-Tasteless-Taste.mp3"
 },
 {
  "name": "71-Dream-and-Reality.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/71-Dream-and-Reality.mp3"
 },
 {
  "name": "85-Message.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/85-Message.mp3"
 },
 {
  "name": "99-Danger.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/99-Danger.mp3"
 },
 {
  "name": "113-Selfless-Service.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/113-Selfless-Service.mp3"
 },
 {
  "name": "02-Intercommunion",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/02-Intercommunion.mp3"
 },
 {
  "name": "16-Meditation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/16-Meditation.mp3"
 },
 {
  "name": "30-Krishna.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/30-Krishna.mp3"
 },
 {
  "name": "44-Saints.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/44-Saints.mp3"
 },
 {
  "name": "58-Grossness-I.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/58-Grossness-I.mp3"
 },
 {
  "name": "72-Forgetting-Food.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/72-Forgetting-Food.mp3"
 },
 {
  "name": "86-Worship.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/86-Worship.mp3"
 },
 {
  "name": "100-Talking-from-the-Heart.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/100-Talking-from-the-Heart.mp3"
 },
 {
  "name": "114-Poverty.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/114-Poverty.mp3"
 },
 {
  "name": "03-Constant-Remembrance",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/03-Constant-Remembrance.mp3"
 },
 {
  "name": "17-Peace.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/17-Peace.mp3"
 },
 {
  "name": "31-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/31-Q-A.mp3"
 },
 {
  "name": "45-Intuition.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/45-Intuition.mp3"
 },
 {
  "name": "59-Blind-Belief.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/59-Blind-Belief.mp3"
 },
 {
  "name": "73-Positive-Thinking.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/73-Positive-Thinking.mp3"
 },
 {
  "name": "87-Meditation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/87-Meditation.mp3"
 },
 {
  "name": "101-Foreign-Travels.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/101-Foreign-Travels.mp3"
 },
 {
  "name": "115-God-is-One.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/115-God-is-One.mp3"
 },
 {
  "name": "04-Spirituality-is-Free",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/04-Spirituality-is-Free.mp3"
 },
 {
  "name": "18-Knots.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/18-Knots.mp3"
 },
 {
  "name": "32-The-Way.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/32-The-Way.mp3"
 },
 {
  "name": "46-Reading-Conditions.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/46-Reading-Conditions.mp3"
 },
 {
  "name": "60-Individuality.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/60-Individuality.mp3"
 },
 {
  "name": "74-Attention-to-Family.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/74-Attention-to-Family.mp3"
 },
 {
  "name": "88-Creation-of-World.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/88-Creation-of-World.mp3"
 },
 {
  "name": "102-Forgetfulness.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/102-Forgetfulness.mp3"
 },
 {
  "name": "116-Cigarettes.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/116-Cigarettes.mp3"
 },
 {
  "name": "05-Chaos",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/05-Chaos.mp3"
 },
 {
  "name": "19-Masters-Grace.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/19-Masters-Grace.mp3"
 },
 {
  "name": "33-A-Prophet.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/33-A-Prophet.mp3"
 },
 {
  "name": "47-Power-Arcs.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/47-Power-Arcs.mp3"
 },
 {
  "name": "61-Illusion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/61-Illusion.mp3"
 },
 {
  "name": "75-Honest-Means.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/75-Honest-Means.mp3"
 },
 {
  "name": "89-Love.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/89-Love.mp3"
 },
 {
  "name": "103-Smoking.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/103-Smoking.mp3"
 },
 {
  "name": "117-My-Master.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/117-My-Master.mp3"
 },
 {
  "name": "06-Freedom",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/06-Freedom.mp3"
 },
 {
  "name": "20-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/20-Q-A.mp3"
 },
 {
  "name": "34-The-Trinity.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/34-The-Trinity.mp3"
 },
 {
  "name": "48-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/48-Q-A.mp3"
 },
 {
  "name": "62-Condition-of-Surrender.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/62-Condition-of-Surrender.mp3"
 },
 {
  "name": "76-Philosophical-Talk.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/76-Philosophical-Talk.mp3"
 },
 {
  "name": "90-Man-and-the-World.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/90-Man-and-the-World.mp3"
 },
 {
  "name": "104-Lalajis-Singing.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/104-Lalajis-Singing.mp3"
 },
 {
  "name": "118-Health-and-Sahaj-Marg.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/118-Health-and-Sahaj-Marg.mp3"
 },
 {
  "name": "07-Message",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/07-Message.mp3"
 },
 {
  "name": "21-Making-Masters.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/21-Making-Masters.mp3"
 },
 {
  "name": "35-Nature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/35-Nature.mp3"
 },
 {
  "name": "49-Influence-of-the-Stars.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/49-Influence-of-the-Stars.mp3"
 },
 {
  "name": "63-No-Promises.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/63-No-Promises.mp3"
 },
 {
  "name": "77-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/77-Q-A.mp3"
 },
 {
  "name": "91-Moderate-Living.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/91-Moderate-Living.mp3"
 },
 {
  "name": "105-Peace-Giver.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/105-Peace-Giver.mp3"
 },
 {
  "name": "119-Work.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/119-Work.mp3"
 },
 {
  "name": "08-Message.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/08-Message.mp3"
 },
 {
  "name": "22-Q-A.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/22-Q-A.mp3"
 },
 {
  "name": "36-Speaking-to-God.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/36-Speaking-to-God.mp3"
 },
 {
  "name": "50-Restlessness.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/50-Restlessness.mp3"
 },
 {
  "name": "64-Beyond-Matter.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/64-Beyond-Matter.mp3"
 },
 {
  "name": "78-Philosophy.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/78-Philosophy.mp3"
 },
 {
  "name": "92-Cleaning.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/92-Cleaning.mp3"
 },
 {
  "name": "106-Thoughts.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/106-Thoughts.mp3"
 },
 {
  "name": "120-Super-Consciousness.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/120-Super-Consciousness.mp3"
 },
 {
  "name": "09-Relationship-with-Master",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/09-Relationship-with-Master.mp3"
 },
 {
  "name": "23-Curvature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/23-Curvature.mp3"
 },
 {
  "name": "37-Shyness.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/37-Shyness.mp3"
 },
 {
  "name": "51-Preparation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/51-Preparation.mp3"
 },
 {
  "name": "65-Spirituality.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/65-Spirituality.mp3"
 },
 {
  "name": "79-Vedas-I.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/79-Vedas-I.mp3"
 },
 {
  "name": "93-Divine-Man-and-God.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/93-Divine-Man-and-God.mp3"
 },
 {
  "name": "107-Balance.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/107-Balance.mp3"
 },
 {
  "name": "121-Meditation-promotes-Health.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/121-Meditation-promotes-Health.mp3"
 },
 {
  "name": "10-Meditation",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/10-Meditation.mp3"
 },
 {
  "name": "24-Sufferings.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/24-Sufferings.mp3"
 },
 {
  "name": "38-Light.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/38-Light.mp3"
 },
 {
  "name": "52-Abstinency.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/52-Abstinency.mp3"
 },
 {
  "name": "66-His-Sensitivity.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/66-His-Sensitivity.mp3"
 },
 {
  "name": "80-Vedas-II.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/80-Vedas-II.mp3"
 },
 {
  "name": "94-Faith.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/94-Faith.mp3"
 },
 {
  "name": "108-Beyond-Liberation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/108-Beyond-Liberation.mp3"
 },
 {
  "name": "122-First-Sitting.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/122-First-Sitting.mp3"
 },
 {
  "name": "11-Nervousness",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/11-Nervousness.mp3"
 },
 {
  "name": "25-God-is-Attributeless.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/25-God-is-Attributeless.mp3"
 },
 {
  "name": "39-Saint-then-Scientist.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/39-Saint-then-Scientist.mp3"
 },
 {
  "name": "53-Visions.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/53-Visions.mp3"
 },
 {
  "name": "67-The-Effects-of-Medicine.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/67-The-Effects-of-Medicine.mp3"
 },
 {
  "name": "81-Egoism.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/81-Egoism.mp3"
 },
 {
  "name": "95-Surrender.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/95-Surrender.mp3"
 },
 {
  "name": "109-Simple-Method.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/109-Simple-Method.mp3"
 },
 {
  "name": "123-Cleaning.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/123-Cleaning.mp3"
 },
 {
  "name": "12-Loss-of-a-Child",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/12-Loss-of-a-Child.mp3"
 },
 {
  "name": "26-Change.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/26-Change.mp3"
 },
 {
  "name": "40-Powers.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/40-Powers.mp3"
 },
 {
  "name": "54-Expressions.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/54-Expressions.mp3"
 },
 {
  "name": "68-Devotion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/68-Devotion.mp3"
 },
 {
  "name": "82-My-Master.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/82-My-Master.mp3"
 },
 {
  "name": "96-Transmission.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/96-Transmission.mp3"
 },
 {
  "name": "110-Criticism.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/110-Criticism.mp3"
 },
 {
  "name": "124-Rebirth-I.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/124-Rebirth-I.mp3"
 },
 {
  "name": "13-Past-Lives",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/13-Past-Lives.mp3"
 },
 {
  "name": "27-Mantras.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/27-Mantras.mp3"
 },
 {
  "name": "41-Power-Arc.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/41-Power-Arc.mp3"
 },
 {
  "name": "55-Realisation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/55-Realisation.mp3"
 },
 {
  "name": "69-Explanation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/69-Explanation.mp3"
 },
 {
  "name": "83-Anger.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/83-Anger.mp3"
 },
 {
  "name": "97-Grossness-II.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/97-Grossness-II.mp3"
 },
 {
  "name": "111-Knowledge.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/111-Knowledge.mp3"
 },
 {
  "name": "125-Rebirth-II.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/125-Rebirth-II.mp3"
 },
 {
  "name": "14-Revolutionary-Approach.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/14-Revolutionary-Approach.mp3"
 },
 {
  "name": "28-The-Effects.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/28-The-Effects.mp3"
 },
 {
  "name": "42-Astrology.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/42-Astrology.mp3"
 },
 {
  "name": "56-Enfoldment.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/56-Enfoldment.mp3"
 },
 {
  "name": "70-Nearness-of-God.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/70-Nearness-of-God.mp3"
 },
 {
  "name": "84-Naturalness.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/84-Naturalness.mp3"
 },
 {
  "name": "98-Babujis-Pain.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/98-Babujis-Pain.mp3"
 },
 {
  "name": "112-Books-on-Philosophy.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/112-Books-on-Philosophy.mp3"
 },
 {
  "name": "sandhya.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Audio\/sandhya.mp3"
 },
 {
  "name": "01Introduction.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/01Introduction.mp3"
 },
 {
  "name": "02Chapter1-MyPain.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/02Chapter1-MyPain.mp3"
 },
 {
  "name": "03Chapter2-MyExistence.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/03Chapter2-MyExistence.mp3"
 },
 {
  "name": "04Chapter3-TheLightBurnsOn.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/04Chapter3-TheLightBurnsOn.mp3"
 },
 {
  "name": "05Chapter4-Afflictions.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/05Chapter4-Afflictions.mp3"
 },
 {
  "name": "06Chapter5-DesperateResolve.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/06Chapter5-DesperateResolve.mp3"
 },
 {
  "name": "07Chapter6-MessageofMyMaster.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/07Chapter6-MessageofMyMaster.mp3"
 },
 {
  "name": "08Chapter7-ThePracticalPursuit.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/08Chapter7-ThePracticalPursuit.mp3"
 },
 {
  "name": "09Chapter8-TheMeans.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/09Chapter8-TheMeans.mp3"
 },
 {
  "name": "10Chapter9-Concentration.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/10Chapter9-Concentration.mp3"
 },
 {
  "name": "11Chapter10-PathOfLove.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/11Chapter10-PathOfLove.mp3"
 },
 {
  "name": "12Chapter11-Master_sSupport.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/12Chapter11-Master_sSupport.mp3"
 },
 {
  "name": "13Chapter12-StagesofProgress.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/13Chapter12-StagesofProgress.mp3"
 },
 {
  "name": "14Chapter13-Clarifications1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/14Chapter13-Clarifications1.mp3"
 },
 {
  "name": "15Chapter13-Clarifications2.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/15Chapter13-Clarifications2.mp3"
 },
 {
  "name": "16Chapter13-Clarifications3.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/16Chapter13-Clarifications3.mp3"
 },
 {
  "name": "17Chapter13-Clarifications4.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/17Chapter13-Clarifications4.mp3"
 },
 {
  "name": "18Chapter13-Clarifications5.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/18Chapter13-Clarifications5.mp3"
 },
 {
  "name": "19Chapter13-Clarifications6.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/19Chapter13-Clarifications6.mp3"
 },
 {
  "name": "20Chapter13-Clarifications7.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/20Chapter13-Clarifications7.mp3"
 },
 {
  "name": "21Chapter13-Clarifications8.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/21Chapter13-Clarifications8.mp3"
 },
 {
  "name": "22Chapter13-Clarifications9.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/22Chapter13-Clarifications9.mp3"
 },
 {
  "name": "23Chapter13-Clarifications10.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/23Chapter13-Clarifications10.mp3"
 },
 {
  "name": "24Chapter13-Clarifications11.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/24Chapter13-Clarifications11.mp3"
 },
 {
  "name": "25Chapter13-Clarifications12.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/25Chapter13-Clarifications12.mp3"
 },
 {
  "name": "26Chapter13-Clarifications13.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/26Chapter13-Clarifications13.mp3"
 },
 {
  "name": "27Chapter14-FirstMessage.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/27Chapter14-FirstMessage.mp3"
 },
 {
  "name": "28Chapter15-MyMaster_sMission.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/28Chapter15-MyMaster_sMission.mp3"
 },
 {
  "name": "29Chapter16-ThePresidents_sFirstMessagetoPeoplein.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/29Chapter16-ThePresidents_sFirstMessagetoPeoplein.mp3"
 },
 {
  "name": "30Chapter17-TheSystemofSahajMarg.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/30Chapter17-TheSystemofSahajMarg.mp3"
 },
 {
  "name": "31Chapter18-EasiestwaytoGodRealisation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/31Chapter18-EasiestwaytoGodRealisation.mp3"
 },
 {
  "name": "32Chapter19-EfficacyofSahajMarg.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/32Chapter19-EfficacyofSahajMarg.mp3"
 },
 {
  "name": "33Chapter20-AFaquir_sWealth.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/33Chapter20-AFaquir_sWealth.mp3"
 },
 {
  "name": "RealityatDawn-01-HomagetotheDivineMaster.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-01-HomagetotheDivineMaster.mp3"
 },
 {
  "name": "RealityatDawn-02-Preface.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-02-Preface.mp3"
 },
 {
  "name": "RealityatDawn-03-Chapter1-Religion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-03-Chapter1-Religion.mp3"
 },
 {
  "name": "RealityatDawn-04-Chapter2-TheGoalofLife.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-04-Chapter2-TheGoalofLife.mp3"
 },
 {
  "name": "RealityatDawn-05-Chapter3-WaysandMeans.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-05-Chapter3-WaysandMeans.mp3"
 },
 {
  "name": "RealityatDawn-06-Chapter4-TheGuru.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-06-Chapter4-TheGuru.mp3"
 },
 {
  "name": "RealityatDawn-07-Chapter5-SpiritualTraining.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-07-Chapter5-SpiritualTraining.mp3"
 },
 {
  "name": "RealityatDawn-08-Chapter6-Faith.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-08-Chapter6-Faith.mp3"
 },
 {
  "name": "RealityatDawn-09-Chapter7-ConstantRemembrance.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-09-Chapter7-ConstantRemembrance.mp3"
 },
 {
  "name": "RealityatDawn-10-Chapter8-Self-Surrender.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-10-Chapter8-Self-Surrender.mp3"
 },
 {
  "name": "RealityatDawn-11-Chapter9-Realization.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-11-Chapter9-Realization.mp3"
 },
 {
  "name": "RealityatDawn-12-Chapter10-MyVision.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-12-Chapter10-MyVision.mp3"
 },
 {
  "name": "RealityatDawn-13-Appendix-Emblem.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20RealityatDawn\/RealityatDawn-13-Appendix-Emblem.mp3"
 },
 {
  "name": "01Commentary...-Foreword.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/01Commentary...-Foreword.mp3"
 },
 {
  "name": "02Commentary...-AWord.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/02Commentary...-AWord.mp3"
 },
 {
  "name": "03Commentary...-Maxim1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/03Commentary...-Maxim1.mp3"
 },
 {
  "name": "04Commentary...-Maxim2.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/04Commentary...-Maxim2.mp3"
 },
 {
  "name": "05Commentary...-Maxim3.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/05Commentary...-Maxim3.mp3"
 },
 {
  "name": "06Commentary...-Maxim4.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/06Commentary...-Maxim4.mp3"
 },
 {
  "name": "07Commentary...-Maxim5.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/07Commentary...-Maxim5.mp3"
 },
 {
  "name": "08Commentary...-Maxim6.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/08Commentary...-Maxim6.mp3"
 },
 {
  "name": "09Commentary...-Maxim7.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/09Commentary...-Maxim7.mp3"
 },
 {
  "name": "10Commentary...-Maxim8.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/10Commentary...-Maxim8.mp3"
 },
 {
  "name": "11Commentary...-Maxim9.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/11Commentary...-Maxim9.mp3"
 },
 {
  "name": "12Commentary...-Maxim10.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-%20TenMaxims1\/12Commentary...-Maxim10.mp3"
 },
 {
  "name": "1Efficacy...-MyMaster.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/1Efficacy...-MyMaster.mp3"
 },
 {
  "name": "2Efficacy...-RajaYoga.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/2Efficacy...-RajaYoga.mp3"
 },
 {
  "name": "3Efficacy...-SahajMarg.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/3Efficacy...-SahajMarg.mp3"
 },
 {
  "name": "4Efficacy...-Meditation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/4Efficacy...-Meditation.mp3"
 },
 {
  "name": "5Efficacy...-HeartRegion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/5Efficacy...-HeartRegion.mp3"
 },
 {
  "name": "6Efficacy...-MindRegion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/6Efficacy...-MindRegion.mp3"
 },
 {
  "name": "7Efficacy...-CentralRegion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/7Efficacy...-CentralRegion.mp3"
 },
 {
  "name": "8Efficacy...-Conclusion.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Rajayoga\/8Efficacy...-Conclusion.mp3"
 },
 {
  "name": "01TowardsInfinity-Preface.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/01TowardsInfinity-Preface.mp3"
 },
 {
  "name": "02TowardsInfinity-Foreword.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/02TowardsInfinity-Foreword.mp3"
 },
 {
  "name": "03TowardsInfinity-Knowledge-Jnaana.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/03TowardsInfinity-Knowledge-Jnaana.mp3"
 },
 {
  "name": "04TowardsInfinity-Knots-Granthis.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/04TowardsInfinity-Knots-Granthis.mp3"
 },
 {
  "name": "05TowardsInfinity-Message-1971.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/05TowardsInfinity-Message-1971.mp3"
 },
 {
  "name": "06TowardsInfinity-TheFinalState.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/06TowardsInfinity-TheFinalState.mp3"
 },
 {
  "name": "07TowardsInfinity-AppendixI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/07TowardsInfinity-AppendixI.mp3"
 },
 {
  "name": "08TowardsInfinity-AppendixII.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/08TowardsInfinity-AppendixII.mp3"
 },
 {
  "name": "09Philosophy-Introduction.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/09Philosophy-Introduction.mp3"
 },
 {
  "name": "10Philosophy-Reality-ItsStaticandDynamicAspects.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/10Philosophy-Reality-ItsStaticandDynamicAspects.mp3"
 },
 {
  "name": "11Philosophy-KnowlegdeandItsNature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/11Philosophy-KnowlegdeandItsNature.mp3"
 },
 {
  "name": "12Philosophy-Man.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/12Philosophy-Man.mp3"
 },
 {
  "name": "13Philosophy-WaytoRealisation-RoleoftheAbhyasi.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/13Philosophy-WaytoRealisation-RoleoftheAbhyasi.mp3"
 },
 {
  "name": "14Philosophy-WaytoRealisation-RoleoftheGuide.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/14Philosophy-WaytoRealisation-RoleoftheGuide.mp3"
 },
 {
  "name": "15Philosophy-StagesonthePathofRealisation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/15Philosophy-StagesonthePathofRealisation.mp3"
 },
 {
  "name": "16Philosophy-Prayer.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Towards-Infinity\/16Philosophy-Prayer.mp3"
 },
 {
  "name": "34Chapter21-TravelLight.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/34Chapter21-TravelLight.mp3"
 },
 {
  "name": "35Chapter22-Remembrance.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/35Chapter22-Remembrance.mp3"
 },
 {
  "name": "36Chapter23-Anandam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/36Chapter23-Anandam.mp3"
 },
 {
  "name": "37Chapter24-TheGoalandThePath.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/37Chapter24-TheGoalandThePath.mp3"
 },
 {
  "name": "38Chapter25-Sati.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/38Chapter25-Sati.mp3"
 },
 {
  "name": "39Chapter26-OurRealNature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/39Chapter26-OurRealNature.mp3"
 },
 {
  "name": "40Chapter27-Gita.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/40Chapter27-Gita.mp3"
 },
 {
  "name": "41Chapter28-AttachmentandFaith.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/41Chapter28-AttachmentandFaith.mp3"
 },
 {
  "name": "42Chapter29-StateofRealisation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/42Chapter29-StateofRealisation.mp3"
 },
 {
  "name": "43Chapter30-DivineSight.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/43Chapter30-DivineSight.mp3"
 },
 {
  "name": "44Chapter31-MeditationonHeart.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/44Chapter31-MeditationonHeart.mp3"
 },
 {
  "name": "45Chapter32-ControlofMind.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/45Chapter32-ControlofMind.mp3"
 },
 {
  "name": "46Chapter33-Nature_sWorkshop.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/46Chapter33-Nature_sWorkshop.mp3"
 },
 {
  "name": "47Chapter34-SahajMarg-ADynamicPath.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/47Chapter34-SahajMarg-ADynamicPath.mp3"
 },
 {
  "name": "48Chapter35-TheIdealandShortcomings.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/48Chapter35-TheIdealandShortcomings.mp3"
 },
 {
  "name": "49Chapter36-SpiritualAdvancement.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/49Chapter36-SpiritualAdvancement.mp3"
 },
 {
  "name": "50Chapter37-ProgressonthePathofSpirituality.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/50Chapter37-ProgressonthePathofSpirituality.mp3"
 },
 {
  "name": "51Chapter38-SpiritualTrainingthroughYogicTransmissio.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/51Chapter38-SpiritualTrainingthroughYogicTransmissio.mp3"
 },
 {
  "name": "52Chapter39-TheEfficaciousWay.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/52Chapter39-TheEfficaciousWay.mp3"
 },
 {
  "name": "53Chapter40-HintstoaSeeker.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/53Chapter40-HintstoaSeeker.mp3"
 },
 {
  "name": "54Chapter41-TheProblem-ItsSolution.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/54Chapter41-TheProblem-ItsSolution.mp3"
 },
 {
  "name": "55Chapter42-Misery,ItsBeginningandEnd.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/55Chapter42-Misery,ItsBeginningandEnd.mp3"
 },
 {
  "name": "56Chapter43-Vibration,SoundandSymbol.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/56Chapter43-Vibration,SoundandSymbol.mp3"
 },
 {
  "name": "57Chapter44-TypesofGurusandDisciples.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/57Chapter44-TypesofGurusandDisciples.mp3"
 },
 {
  "name": "58Chapter45-RealityOfMatter.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/58Chapter45-RealityOfMatter.mp3"
 },
 {
  "name": "59Chapter46-AmbrosialShower1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/59Chapter46-AmbrosialShower1.mp3"
 },
 {
  "name": "60Chapter46-AmbrosialShower2.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/60Chapter46-AmbrosialShower2.mp3"
 },
 {
  "name": "61Chapter46-AmbrosialShower3.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/61Chapter46-AmbrosialShower3.mp3"
 },
 {
  "name": "62Chapter46-AmbrosialShower4.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/62Chapter46-AmbrosialShower4.mp3"
 },
 {
  "name": "63Chapter46-AmbrosialShower5.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/63Chapter46-AmbrosialShower5.mp3"
 },
 {
  "name": "64Chapter46-AmbrosialShower6.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/64Chapter46-AmbrosialShower6.mp3"
 },
 {
  "name": "65Chapter46-AmbrosialShower7.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/65Chapter46-AmbrosialShower7.mp3"
 },
 {
  "name": "66Chapter46-AmbrosialShower8.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-VoiceReal1and2\/66Chapter46-AmbrosialShower8.mp3"
 },
 {
  "name": "09 Philosophy - Introduction.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/09%20Philosophy%20-%20Introduction.mp3"
 },
 {
  "name": "10 Philosophy - Reality - Its Static and Dynamic Aspects.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/10%20Philosophy%20-%20Reality%20-%20Its%20Static%20and%20Dynamic%20Aspects.mp3"
 },
 {
  "name": "11 Philosophy - Knowlegde and Its Nature.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/11%20Philosophy%20-%20Knowlegde%20and%20Its%20Nature.mp3"
 },
 {
  "name": "12 Philosophy - Man.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/12%20Philosophy%20-%20Man.mp3"
 },
 {
  "name": "13 Philosophy - Way to Realisation - Role of the Abhyasi.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/13%20Philosophy%20-%20Way%20to%20Realisation%20-%20Role%20of%20the%20Abhyasi.mp3"
 },
 {
  "name": "14 Philosophy - Way to Realisation - Role of the Guide.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/14%20Philosophy%20-%20Way%20to%20Realisation%20-%20Role%20of%20the%20Guide.mp3"
 },
 {
  "name": "15 Philosophy - Stages on the Path of Realisation.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/15%20Philosophy%20-%20Stages%20on%20the%20Path%20of%20Realisation.mp3"
 },
 {
  "name": "16 Philosophy - Prayer.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiEnglishAudioBooks\/E-Sahajmarg%20philosophy\/16%20Philosophy%20-%20Prayer.mp3"
 },
 {
  "name": "KrishnaBhagawanuniANTHARVAANI_01_of_02.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/KrishnaBhagawanuniANTHARVAANI_01_of_02.mp3"
 },
 {
  "name": "KrishnaBhagawanuniANTHARVAANI_02_of_02.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/KrishnaBhagawanuniANTHARVAANI_02_of_02.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_01_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_01_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_02_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_02_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_03_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_03_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_04_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_04_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_05_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_05_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_06_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_06_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_07_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_07_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_08_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_08_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_09_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_09_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_10_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_10_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_11_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_11_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_12_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_12_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_13_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_13_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_14_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_14_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_15_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_15_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_16_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_16_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_17_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_17_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_18_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_18_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_19_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_19_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_20_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_20_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_21_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_21_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_22_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_22_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_23_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_23_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_24_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_24_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_25_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_25_of_26.mp3"
 },
 {
  "name": "LALAJIgariANTHARVAANI_26_of_26.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/LALAJIgariANTHARVAANI_26_of_26.mp3"
 },
 {
  "name": "RaadhaDeviANTHARVAANI_01_of_04.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/RaadhaDeviANTHARVAANI_01_of_04.mp3"
 },
 {
  "name": "RaadhaDeviANTHARVAANI_02_of_04.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/RaadhaDeviANTHARVAANI_02_of_04.mp3"
 },
 {
  "name": "RaadhaDeviANTHARVAANI_03_of_04.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/RaadhaDeviANTHARVAANI_03_of_04.mp3"
 },
 {
  "name": "RaadhaDeviANTHARVAANI_04_of_04.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/RaadhaDeviANTHARVAANI_04_of_04.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_01_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_01_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_02_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_02_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_03_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_03_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_04_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_04_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_05_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_05_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_06_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_06_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_07_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_07_of_08.mp3"
 },
 {
  "name": "VIVEKAANANDAgariANTHARVAANI_08_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%82%E0%B0%A4%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-%E0%B0%85%E0%B0%A1%E0%B0%BF%E0%B0%AF%E0%B1%8B\/VIVEKAANANDAgariANTHARVAANI_08_of_08.mp3"
 },
 {
  "name": "SriRamChandhraAMRUTHAVARSHINI_01",
  "url": "babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/అమృతవర్షిణీ\/SriRamChandhraAMRUTHAVARSHINI_01_of_04.mp3"
 },
 {
  "name": "SriRamChandhraAMRUTHAVARSHINI_02",
  "url": "babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/అమృతవర్షిణీ\/SriRamChandhraAMRUTHAVARSHINI_02_of_04.mp3"
 },
 {
  "name": "SriRamChandhraAMRUTHAVARSHINI_03",
  "url": "babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/అమృతవర్షిణీ\/SriRamChandhraAMRUTHAVARSHINI_03_of_04.mp3"
 },
 {
  "name": "SriRamChandhraAMRUTHAVARSHINI_04",
  "url": "babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/అమృతవర్షిణీ\/SriRamChandhraAMRUTHAVARSHINI_04_of_04.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_01_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_01_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_02_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_02_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_03_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_03_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_04_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_04_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_05_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_05_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_06_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_06_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_07_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_07_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_08_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_08_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_09_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_09_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_10_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_10_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_11_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_11_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_12_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_12_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_13_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_13_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_14_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_14_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_15_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_15_of_16.mp3"
 },
 {
  "name": "BabujigariSwiyaCharithra_16_of_16.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%AC%E0%B0%BE%E0%B0%8B%E0%B0%9C%E0%B1%80_%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%AF_%E0%B0%9A%E0%B0%B0%E0%B0%BF%E0%B0%A4%E0%B1%8D%E0%B0%B0\/BabujigariSwiyaCharithra_16_of_16.mp3"
 },
 {
  "name": "Niyamamu1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu1.mp3"
 },
 {
  "name": "Niyamamu-1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-1.mp3"
 },
 {
  "name": "Niyamamu-2.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-2.mp3"
 },
 {
  "name": "Niyamamu-3.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-3.mp3"
 },
 {
  "name": "Niyamamu-4.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-4.mp3"
 },
 {
  "name": "Niyamamu-5.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-5.mp3"
 },
 {
  "name": "Niyamamu-6.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-6.mp3"
 },
 {
  "name": "Niyamamu-7.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-7.mp3"
 },
 {
  "name": "Niyamamu-8.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-8.mp3"
 },
 {
  "name": "Niyamamu-9.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-9.mp3"
 },
 {
  "name": "Niyamamu-10.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%A6%E0%B0%B6%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%AE%E0%B1%81%E0%B0%B2%E0%B1%81_srcm\/Niyamamu-10.mp3"
 },
 {
  "name": "1.Guruvaryulu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/1.Guruvaryulu.mp3"
 },
 {
  "name": "2.Rajayogam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/2.Rajayogam.mp3"
 },
 {
  "name": "3.Sahajamargam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/3.Sahajamargam.mp3"
 },
 {
  "name": "4.Dhyanam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/4.Dhyanam.mp3"
 },
 {
  "name": "5.HrudayaKshetram.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/5.HrudayaKshetram.mp3"
 },
 {
  "name": "6.ManoKshetramu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/6.ManoKshetramu.mp3"
 },
 {
  "name": "7.Kendrakshetramu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/7.Kendrakshetramu.mp3"
 },
 {
  "name": "8.Mugimpu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B0%E0%B0%BE%E0%B0%9C%E0%B0%AF%E0%B1%8B%E0%B0%97_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%AD%E0%B0%BE%E0%B0%B5%E0%B0%AE%E0%B1%81-srcm\/8.Mugimpu.mp3"
 },
 {
  "name": "01PujyaGurudevunikiShraddhaanjali.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/01PujyaGurudevunikiShraddhaanjali.mp3"
 },
 {
  "name": "02Tholipalukulu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/02Tholipalukulu.mp3"
 },
 {
  "name": "03Mathamu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/03Mathamu.mp3"
 },
 {
  "name": "04JeevithaLakshyam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/04JeevithaLakshyam.mp3"
 },
 {
  "name": "05Saadhanopaayamulu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/05Saadhanopaayamulu.mp3"
 },
 {
  "name": "06Guruvu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/06Guruvu.mp3"
 },
 {
  "name": "07AadhyaathmikaSikshana.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/07AadhyaathmikaSikshana.mp3"
 },
 {
  "name": "08Shraddha.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/08Shraddha.mp3"
 },
 {
  "name": "09NirantharaSmarana.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/09NirantharaSmarana.mp3"
 },
 {
  "name": "10AathmaSamarpana.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/10AathmaSamarpana.mp3"
 },
 {
  "name": "11Saakshaatkaaram.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/11Saakshaatkaaram.mp3"
 },
 {
  "name": "12NaaBhavishyadrishti.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/12NaaBhavishyadrishti.mp3"
 },
 {
  "name": "13Anubandham-SamsthaChihnamu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B1%8B%E0%B0%A6%E0%B0%AF%E0%B0%82-srcm\/13Anubandham-SamsthaChihnamu.mp3"
 },
 {
  "name": "1Parichayam.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/1Parichayam.mp3"
 },
 {
  "name": "2Saththathvamu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/2Saththathvamu.mp3"
 },
 {
  "name": "3Gnaanamu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/3Gnaanamu.mp3"
 },
 {
  "name": "4Maanavudu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/4Maanavudu.mp3"
 },
 {
  "name": "5Saakshaathkaaramu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/5Saakshaathkaaramu.mp3"
 },
 {
  "name": "6Saakshaathkaaramu-02.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/6Saakshaathkaaramu-02.mp3"
 },
 {
  "name": "7Saakshaathkaaramu-03.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97_%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%AE%E0%B1%81-srcm\/7Saakshaathkaaramu-03.mp3"
 },
 {
  "name": "AABTHABE MAREFAT HAI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AABTHABE%20MAREFAT%20HAI.mp3"
 },
 {
  "name": "AAJ BHAR AAYEE HAI AKHIYA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AAJ%20BHAR%20AAYEE%20HAI%20AKHIYA.mp3"
 },
 {
  "name": "AAJ HAMARE GHAR ANGAN ME.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AAJ%20HAMARE%20GHAR%20ANGAN%20ME.mp3"
 },
 {
  "name": "AAP MUSKATHE RAHE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AAP%20MUSKATHE%20RAHE.mp3"
 },
 {
  "name": "AATMANE HALATE PARAMATMA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AATMANE%20HALATE%20PARAMATMA.mp3"
 },
 {
  "name": "AAYE HAMARE BABUJI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AAYE%20HAMARE%20BABUJI.mp3"
 },
 {
  "name": "AAYE RAM LAUT GAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AAYE%20RAM%20LAUT%20GAYE.mp3"
 },
 {
  "name": "AB SATYA HUA MERA SAPNA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AB%20SATYA%20HUA%20MERA%20SAPNA.mp3"
 },
 {
  "name": "AISEE NAGARI ME KIS VIDHI RAHNA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AISEE%20NAGARI%20ME%20KIS%20VIDHI%20RAHNA.mp3"
 },
 {
  "name": "ANUPAM HAI ANOOTE HAI SHRI BABUJI\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tHAMAREY HAI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/ANUPAM%20HAI%20ANOOTE%20HAI%20SHRI%20BABUJI%20HAMAREY%20HAI.mp3"
 },
 {
  "name": "APNE PYARE BABUJI KA UTSAV JAB UTARE\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDHARA PAR.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/APNE%20PYARE%20BABUJI%20KA%20UTSAV%20JAB%20UTARE%20DHARA%20PAR.mp3"
 },
 {
  "name": "AREY HAI KIS NE HAMEY BULAYA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/AREY%20HAI%20KIS%20NE%20HAMEY%20BULAYA.mp3"
 },
 {
  "name": "BABU TUMHAR JANAM DIN.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/BABU%20TUMHAR%20JANAM%20DIN.mp3"
 },
 {
  "name": "BABUJI HAMARE HAI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/BABUJI%20HAMARE%20HAI.mp3"
 },
 {
  "name": "BABUJI MAHARAJ MEREY BABUJI\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMAHARAJ.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/BABUJI%20MAHARAJ%20MEREY%20BABUJI%20MAHARAJ.mp3"
 },
 {
  "name": "BASANT AAYA KYA HAI LAYA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/BASANT%20AAYA%20KYA%20HAI%20LAYA.mp3"
 },
 {
  "name": "BHOOL GAYEE MEIN THO.mp3",
  "url": "babujisahajmarg.in\/assests\/saint kasturi audio\/BHOOL GAYEE MEIN THO.mp3"
 },
 {
  "name": "CHALO ASHRAM CHALE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/CHALO%20ASHRAM%20CHALE.mp3"
 },
 {
  "name": "DATHA EK BABUJI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/DATHA%20EK%20BABUJI.mp3"
 },
 {
  "name": "GHIR RAHEE SAJAL (SHAT SHAT\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPRANAM).mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/GHIR%20RAHEE%20SAJAL%20(SHAT%20SHAT%20PRANAM).mp3"
 },
 {
  "name": "HAM THO DIL KO.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/HAM%20THO%20DIL%20KO.mp3"
 },
 {
  "name": "HAM THO INPE NISAR.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/HAM%20THO%20INPE%20NISAR.mp3"
 },
 {
  "name": "HAMAN HAI ISHQ MASTANA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/HAMAN%20HAI%20ISHQ%20MASTANA.mp3"
 },
 {
  "name": "HUA DEEVANA KOYI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/HUA%20DEEVANA%20KOYI.mp3"
 },
 {
  "name": "JALTA HAI DEEP LALA KA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/JALTA%20HAI%20DEEP%20LALA%20KA.mp3"
 },
 {
  "name": "JHALAK JO SAMNE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/JHALAK%20JO%20SAMNE.mp3"
 },
 {
  "name": "JIN KE HRIDAY SHRI BABUJI HAI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/JIN%20KE%20HRIDAY%20SHRI%20BABUJI%20HAI.mp3"
 },
 {
  "name": "JIN KE HRIDAY.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/JIN%20KE%20HRIDAY.mp3"
 },
 {
  "name": "KAHE KO RANGAYEE GORI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/KAHE%20KO%20RANGAYEE%20GORI.mp3"
 },
 {
  "name": "KAUN THEY VO.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/KAUN%20THEY%20VO.mp3"
 },
 {
  "name": "KISI NE TUJHKO FATEGARH ME.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/KISI%20NE%20TUJHKO%20FATEGARH%20ME.mp3"
 },
 {
  "name": "KITNE DOOR RAHE MANZHIL PAR.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/KITNE%20DOOR%20RAHE%20MANZHIL%20PAR.mp3"
 },
 {
  "name": "KYA KAHE SAMJHE NA KUCH.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/KYA%20KAHE%20SAMJHE%20NA%20KUCH.mp3"
 },
 {
  "name": "LOG NA JAANE KYO.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/LOG%20NA%20JAANE%20KYO.mp3"
 },
 {
  "name": "MANAYENGE SOUVA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/MANAYENGE%20SOUVA.mp3"
 },
 {
  "name": "MERA THERA MANUVA KAISE EK HOYI\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tRE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/MERA%20THERA%20MANUVA%20KAISE%20EK%20HOYI%20RE.mp3"
 },
 {
  "name": "MUJHE AAJ THEREE BAHUT YAD AAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/MUJHE%20AAJ%20THEREE%20BAHUT%20YAD%20AAYE.mp3"
 },
 {
  "name": "NIGAH TERI ME.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/NIGAH%20TERI%20ME.mp3"
 },
 {
  "name": "O BABUJI JO THEREY CHARANOME.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/O%20BABUJI%20JO%20THEREY%20CHARANOME.mp3"
 },
 {
  "name": "O BABUJI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/O%20BABUJI.mp3"
 },
 {
  "name": "PREMEE BAHU THEREY PREM.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/PREMEE%20BAHU%20THEREY%20PREM.mp3"
 },
 {
  "name": "PRIYA RAM BINA DUKH KAUN SUNE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/PRIYA%20RAM%20BINA%20DUKH%20KAUN%20SUNE.mp3"
 },
 {
  "name": "RAHE THO AISE KI JAISE MISSION HAMARA\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tHAI.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/RAHE%20THO%20AISE%20KI%20JAISE%20MISSION%20HAMARA%20HAI.mp3"
 },
 {
  "name": "RAM BINA DUKH.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/RAM%20BINA%20DUKH.mp3"
 },
 {
  "name": "SAB JAG ANDHA MEIN KISE SAMJHAOON.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/SAB%20JAG%20ANDHA%20MEIN%20KISE%20SAMJHAOON.mp3"
 },
 {
  "name": "SAIR KO LAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/SAIR%20KO%20LAYE.mp3"
 },
 {
  "name": "SAMAJH ME NA AAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/SAMAJH%20ME%20NA%20AAYE.mp3"
 },
 {
  "name": "SAMAJH MEY NA AAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/SAMAJH%20MEY%20NA%20AAYE.mp3"
 },
 {
  "name": "THU MERA AAJ KAHOO.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/THU%20MERA%20AAJ%20KAHOO.mp3"
 },
 {
  "name": "TUMHAREE YAD ME DUNIYA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/TUMHAREE%20YAD%20ME%20DUNIYA.mp3"
 },
 {
  "name": "TUMHARI YAD ME DUNIYA.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/TUMHARI%20YAD%20ME%20DUNIYA.mp3"
 },
 {
  "name": "VAH JEEVAN KYA JIS JEEVAN MEY.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/VAH%20JEEVAN%20KYA%20JIS%20JEEVAN%20MEY.mp3"
 },
 {
  "name": "YAAD AATEE NIGAH.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/YAAD%20AATEE%20NIGAH.mp3"
 },
 {
  "name": "YAAD MEY BHAR AAYE THUM.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/YAAD%20MEY%20BHAR%20AAYE%20THUM.mp3"
 },
 {
  "name": "YADONE KIYA YAD.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/YADONE%20KIYA%20YAD.mp3"
 },
 {
  "name": "YE KAUN DHARA PE AAYE.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/saint%20kasturi%20audio\/YE%20KAUN%20DHARA%20PE%20AAYE.mp3"
 },
 {
  "name": "Aaye hain hamare babuji by - saint kasturi chaturvedi (SHRI RAM CHANDRA MISSION)",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM&si=t0B9rQGN-wvp9zQu"
 },
 {
  "name": "Nigah Teri Mein geet sung by Behanji (Sahaj Marg)",
  "url": "https:\/\/www.youtube.com\/watch?v=BAgriuZjmUw"
 },
 {
  "name": "Basant Aaya Kya Hai Laya Geet (Sahaj Marg)",
  "url": "https:\/\/www.youtube.com\/watch?v=J0nUHEUPLiE"
 },
 {
  "name": "Song - Are ye kisne hamen jagaya by saint kasturi chaturvedi (SHRI RAM CHANDRA MISSION)",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Aap muskate rahen by - saint kasturi & kesar chaturvedi ji (SRI RAM CHANDRA MISSION)",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "O babuji jo tere charnon me by - saint kasturi chaturvedi (SHRI RAM CHANDRA MISSION)",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Saint Sister Kasturi Chaturvedi Song-1",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Saint Sister Kasturi Chaturvedi Song-2",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Saint Sister Kasturi Chaturvedi Song-4",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Saint Sister Kasturi Chaturvedi Song-3",
  "url": "https:\/\/www.youtube.com\/watch?v=mnfQOT8xmIM"
 },
 {
  "name": "Video1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/VID-20190915-WA0012.mp4"
 },
 {
  "name": "Video2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/VID-20190915-WA0015.mp4"
 },
 {
  "name": "Video3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/VID-20190915-WA0016.mp4"
 },
 {
  "name": "Image1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0013.jpg"
 },
 {
  "name": "Image2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190622-WA0047.jpg"
 },
 {
  "name": "Image3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0017.jpg"
 },
 {
  "name": "Image4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20180824-WA0000.jpg"
 },
 {
  "name": "Image5",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0016.jpg"
 },
 {
  "name": "Image6",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0022-743x1024.jpg"
 },
 {
  "name": "Image7",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0107-762x1024.jpg"
 },
 {
  "name": "Image8",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0019.jpg"
 },
 {
  "name": "Image9",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190818-WA0024.jpg"
 },
 {
  "name": "SAHAJ MĀRG SADHANA OF ESOTERICISM - PART-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/SAHAJ%20M%C4%80RG%20SADHANA%20OF%20ESOTERICISM%20-%20PART-1.pdf"
 },
 {
  "name": "SAHAJ MĀRG SADHANA OF ESOTERICISM PART -2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/SAHAJ%20M%C4%80RG%20%20SADHANA%20OF%20ESOTERICISM%20PART%20-2.pdf"
 },
 {
  "name": "SESQUICENTENNIAL YEAR.",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/SESQUICENTENNIAL%20YEAR..pdf"
 },
 {
  "name": "125 th BIRTH YEAR OF SHRI RAM CHANDRAJI MAHARAJ",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/125%20th%20BIRTH%20YEAR%20OF%20%20SHRI%20RAM%20CHANDRAJI%20MAHARAJ.pdf"
 },
 {
  "name": "NEUROPHYSIOLOGICAL BASIS OF RAJA YOGA IN THE\n                                            LIGHT OF SAHAJ MARG",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/NEUROPHYSIOLOGICAL%20BASIS%20OF%20RAJA%20YOGA%20IN%20THE%20LIGHT%20OF%20SAHAJ%20MARG.pdf"
 },
 {
  "name": "Research Book by Prem Sagar",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/Research%20Book%20by%20Prem%20Sagar.pdf"
 },
 {
  "name": "SAHAJMARGENCYLOPEDI PART-2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/SAHAJMARGENCYLOPEDI%20PART-2..pdf"
 },
 {
  "name": "SAHAJMARGENCYLOPEDIA-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/SAHAJMARGENCYLOPEDIA-1.pdf"
 },
 {
  "name": "సహజమార్గ ఆధ్యాత్మిక విజ్ఞాన సర్వస్వం.-1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97%20%E0%B0%86%E0%B0%A7%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A4%E0%B1%8D%E0%B0%AE%E0%B0%BF%E0%B0%95%20%E0%B0%B5%E0%B0%BF%E0%B0%9C%E0%B1%8D%E0%B0%9E%E0%B0%BE%E0%B0%A8%20%E0%B0%B8%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B0%82.-1.pdf"
 },
 {
  "name": "సహజమార్గ పద్ధతి-పరిపూర్ణత విధానం-2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/%E0%B0%B8%E0%B0%B9%E0%B0%9C%E0%B0%AE%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%97%20%E0%B0%AA%E0%B0%A6%E0%B1%8D%E0%B0%A7%E0%B0%A4%E0%B0%BF-%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%AA%E0%B1%82%E0%B0%B0%E0%B1%8D%E0%B0%A3%E0%B0%A4%20%E0%B0%B5%E0%B0%BF%E0%B0%A7%E0%B0%BE%E0%B0%A8%E0%B0%82-2.pdf"
 },
 {
  "name": "Basics needs for spiritual evolution",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/Basics%20needs%20%20for%20spiritual%20evolution%20.pdf"
 },
 {
  "name": "Sahaj Marg & Personality Problems Vol 1",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/Sahaj%20Marg%20&%20Personality%20Problems%20Vol%201.pdf"
 },
 {
  "name": "Sajaj Marg & Personality problems Vol 2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/New%202024\/Sajaj%20Marg%20&%20Personality%20problems%20Vol%202.pdf"
 },
 {
  "name": "Detail of chapters",
  "url": "babujisahajmarg.in\/assests\/Books\/Esotericism\/Gate Way to Ultimate Reality\/Detail of chapters.pdf"
 },
 {
  "name": "Other Systems",
  "url": "babujisahajmarg.in\/assests\/Books\/Esotericism\/Gate Way to Ultimate Reality\/Other Systems.pdf"
 },
 {
  "name": "GATE WAY TO ULTIMATE REALITY",
  "url": "babujisahajmarg.in\/assests\/Books\/Esotericism\/Gate Way to Ultimate Reality\/GATE WAY TO ULTIMATE REALITY.pdf"
 },
 {
  "name": "MOT-English-Supplement",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/MOT-English-Supplement.pdf"
 },
 {
  "name": "Preceptors guide SAHAJ MARG",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/Preceptors%20guide%20SAHAJ%20MARG.pdf"
 },
 {
  "name": "Spiritual Guide lines of Sahaj Marg 1960 _ 1967 .",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/Spiritual%20Guide%20lines%20of%20Sahaj%20Marg%201960%20_%201967%20..pdf"
 },
 {
  "name": "Telugu preceptors guide.",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/Telugu%20preceptors%20guide.pdf"
 },
 {
  "name": "Telugu preceptors guide 2",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/Telugu%20preceptors%20guide%202.pdf"
 },
 {
  "name": "Telugu preceptors guide 3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Preceptor%20Guide%20lines\/Telugu%20preceptors%20guide%203.pdf"
 },
 {
  "name": "patrika 56.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2056.1.pdf"
 },
 {
  "name": "patrika 57.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2057.1.pdf"
 },
 {
  "name": "patrika 57.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2057.2.pdf"
 },
 {
  "name": "patrika 57.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2057.3.pdf"
 },
 {
  "name": "patrika 58.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2058.1.pdf"
 },
 {
  "name": "patrika 58.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2058.2.pdf"
 },
 {
  "name": "patrika 58.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2058.3.pdf"
 },
 {
  "name": "patrika 58.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2058.4.pdf"
 },
 {
  "name": "patrika 59.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2059.1.pdf"
 },
 {
  "name": "patrika 59.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2059.2.pdf"
 },
 {
  "name": "patrika 59.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2059.3.pdf"
 },
 {
  "name": "patrika 59.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2059.4.pdf"
 },
 {
  "name": "patrika 61.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2061.3.pdf"
 },
 {
  "name": "patrika 63.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2063.1.pdf"
 },
 {
  "name": "patrika 65.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2065.2.pdf"
 },
 {
  "name": "patrika 65.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2065.3.pdf"
 },
 {
  "name": "patrika 66.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2066.5.pdf"
 },
 {
  "name": "patrika 67.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2067.1.pdf"
 },
 {
  "name": "patrika 69.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2069.2.pdf"
 },
 {
  "name": "patrika 69.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2069.3.pdf"
 },
 {
  "name": "patrika 69.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2069.5.pdf"
 },
 {
  "name": "patrika 70.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2070.1.pdf"
 },
 {
  "name": "patrika 70.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2070.2.pdf"
 },
 {
  "name": "patrika 70.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2070.3.pdf"
 },
 {
  "name": "patrika 70.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2070.4.pdf"
 },
 {
  "name": "patrika 70.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2070.5.pdf"
 },
 {
  "name": "patrika 71.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2071.2.pdf"
 },
 {
  "name": "patrika 74.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2074.5.pdf"
 },
 {
  "name": "patrika 76.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2076.4.pdf"
 },
 {
  "name": "patrika 77.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2077.5.pdf"
 },
 {
  "name": "patrika 80.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2080.2.pdf"
 },
 {
  "name": "patrika 82.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/patrika%2082.4.pdf"
 },
 {
  "name": "Patrika_61.1 (1).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.1%20(1).pdf"
 },
 {
  "name": "Patrika_61.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.1.pdf"
 },
 {
  "name": "Patrika_61.2 (1).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.2%20(1).pdf"
 },
 {
  "name": "Patrika_61.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.2.pdf"
 },
 {
  "name": "Patrika_61.4 (1).pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.4%20(1).pdf"
 },
 {
  "name": "Patrika_61.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_61.4.pdf"
 },
 {
  "name": "Patrika_62.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_62.1.pdf"
 },
 {
  "name": "Patrika_62.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_62.2.pdf"
 },
 {
  "name": "Patrika_62.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_62.3.pdf"
 },
 {
  "name": "Patrika_62.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_62.4.pdf"
 },
 {
  "name": "Patrika_63.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_63.2.pdf"
 },
 {
  "name": "Patrika_63.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_63.3.pdf"
 },
 {
  "name": "Patrika_63.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_63.4.pdf"
 },
 {
  "name": "Patrika_64.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_64.1.pdf"
 },
 {
  "name": "Patrika_64.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_64.2.pdf"
 },
 {
  "name": "Patrika_64.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_64.4.pdf"
 },
 {
  "name": "Patrika_65.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_65.1.pdf"
 },
 {
  "name": "Patrika_66.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_66.2.pdf"
 },
 {
  "name": "Patrika_66.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_66.6.pdf"
 },
 {
  "name": "Patrika_67.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_67.2.pdf"
 },
 {
  "name": "Patrika_68.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_68.1.pdf"
 },
 {
  "name": "Patrika_68.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_68.2.pdf"
 },
 {
  "name": "Patrika_68.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_68.3.pdf"
 },
 {
  "name": "Patrika_68.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_68.4.pdf"
 },
 {
  "name": "Patrika_68.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_68.5.pdf"
 },
 {
  "name": "Patrika_69.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_69.1.pdf"
 },
 {
  "name": "Patrika_69.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_69.4.pdf"
 },
 {
  "name": "Patrika_69.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_69.6.pdf"
 },
 {
  "name": "Patrika_70.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_70.6.pdf"
 },
 {
  "name": "Patrika_71.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_71.1.pdf"
 },
 {
  "name": "Patrika_71.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_71.3.pdf"
 },
 {
  "name": "Patrika_71.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_71.4.pdf"
 },
 {
  "name": "Patrika_71.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_71.5.pdf"
 },
 {
  "name": "Patrika_72.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_72.1.pdf"
 },
 {
  "name": "Patrika_72.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_72.2.pdf"
 },
 {
  "name": "Patrika_72.3.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_72.3.4.pdf"
 },
 {
  "name": "Patrika_72.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_72.5.pdf"
 },
 {
  "name": "Patrika_72.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_72.6.pdf"
 },
 {
  "name": "Patrika_73.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.1.pdf"
 },
 {
  "name": "Patrika_73.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.2.pdf"
 },
 {
  "name": "Patrika_73.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.3.pdf"
 },
 {
  "name": "Patrika_73.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.4.pdf"
 },
 {
  "name": "Patrika_73.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.5.pdf"
 },
 {
  "name": "Patrika_73.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_73.6.pdf"
 },
 {
  "name": "Patrika_74.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_74.1.pdf"
 },
 {
  "name": "Patrika_74.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_74.2.pdf"
 },
 {
  "name": "Patrika_74.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_74.3.pdf"
 },
 {
  "name": "Patrika_74.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_74.6.pdf"
 },
 {
  "name": "Patrika_75.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.1.pdf"
 },
 {
  "name": "Patrika_75.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.2.pdf"
 },
 {
  "name": "Patrika_75.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.3.pdf"
 },
 {
  "name": "Patrika_75.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.4.pdf"
 },
 {
  "name": "Patrika_75.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.5.pdf"
 },
 {
  "name": "Patrika_75.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_75.6.pdf"
 },
 {
  "name": "Patrika_76.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_76.1.pdf"
 },
 {
  "name": "Patrika_76.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_76.2.pdf"
 },
 {
  "name": "Patrika_76.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_76.3.pdf"
 },
 {
  "name": "Patrika_76.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_76.5.pdf"
 },
 {
  "name": "Patrika_76.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_76.6.pdf"
 },
 {
  "name": "Patrika_77.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_77.1.pdf"
 },
 {
  "name": "Patrika_77.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_77.2.pdf"
 },
 {
  "name": "Patrika_77.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_77.3.pdf"
 },
 {
  "name": "Patrika_77.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_77.4.pdf"
 },
 {
  "name": "Patrika_77.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_77.6.pdf"
 },
 {
  "name": "Patrika_78.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.1.pdf"
 },
 {
  "name": "Patrika_78.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.2.pdf"
 },
 {
  "name": "Patrika_78.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.3.pdf"
 },
 {
  "name": "Patrika_78.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.4.pdf"
 },
 {
  "name": "Patrika_78.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.5.pdf"
 },
 {
  "name": "Patrika_78.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_78.6.pdf"
 },
 {
  "name": "Patrika_79.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.1.pdf"
 },
 {
  "name": "Patrika_79.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.2.pdf"
 },
 {
  "name": "Patrika_79.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.3.pdf"
 },
 {
  "name": "Patrika_79.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.4.pdf"
 },
 {
  "name": "Patrika_79.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.5.pdf"
 },
 {
  "name": "Patrika_79.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_79.6.pdf"
 },
 {
  "name": "Patrika_80.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_80.1.pdf"
 },
 {
  "name": "Patrika_80.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_80.3.pdf"
 },
 {
  "name": "Patrika_80.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_80.5.pdf"
 },
 {
  "name": "Patrika_80.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_80.6.pdf"
 },
 {
  "name": "Patrika_81.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.1.pdf"
 },
 {
  "name": "Patrika_81.2.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.2.pdf"
 },
 {
  "name": "Patrika_81.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.3.pdf"
 },
 {
  "name": "Patrika_81.4.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.4.pdf"
 },
 {
  "name": "Patrika_81.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.5.pdf"
 },
 {
  "name": "Patrika_81.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_81.6.pdf"
 },
 {
  "name": "Patrika_82.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_82.1.pdf"
 },
 {
  "name": "Patrika_82.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_82.3.pdf"
 },
 {
  "name": "Patrika_82.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_82.5.pdf"
 },
 {
  "name": "Patrika_82.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_82.6.pdf"
 },
 {
  "name": "Patrika_83.1.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_83.1.pdf"
 },
 {
  "name": "Patrika_83.2.3.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_83.2.3.pdf"
 },
 {
  "name": "Patrika_83.4.5.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_83.4.5.pdf"
 },
 {
  "name": "Patrika_83.6.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Patrika\/Patrika_83.6.pdf"
 },
 {
  "name": "69 babujis 71th birthday.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/69%20babujis%2071th%20birthday.pdf"
 },
 {
  "name": "73-24-02 birth centenary madras.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/73-24-02%20birth%20centenary%20madras.pdf"
 },
 {
  "name": "74-24-10 75th b.bd hyderabad.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/74-24-10%2075th%20b.bd%20hyderabad.pdf"
 },
 {
  "name": "77-25-11 inauguration tinsukia.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/77-25-11%20inauguration%20tinsukia.pdf"
 },
 {
  "name": "77-30-04 78th b.bd madurai.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/77-30-04%2078th%20b.bd%20madurai.pdf"
 },
 {
  "name": "78-30-04 79th b.bd bangalore.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/78-30-04%2079th%20b.bd%20bangalore.pdf"
 },
 {
  "name": "79-30-04 80th b.bd ahmedabad.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/79-30-04%2080th%20b.bd%20ahmedabad.pdf"
 },
 {
  "name": "80-30-04 81th b.bd delhi.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/80-30-04%2081th%20b.bd%20delhi.pdf"
 },
 {
  "name": "81-30-04 82th b.bd malaysia.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/81-30-04%2082th%20b.bd%20malaysia.pdf"
 },
 {
  "name": "82-30-04 83th b.bd surat.pdf",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Books\/Esotericism\/Souvniers\/82-30-04%2083th%20b.bd%20surat.pdf"
 },
 {
  "name": "011Prasthaavana.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/011Prasthaavana.mp3"
 },
 {
  "name": "022Mundumaata.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/022Mundumaata.mp3"
 },
 {
  "name": "033Gnaanamu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/033Gnaanamu.mp3"
 },
 {
  "name": "044Grandhlu.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/044Grandhlu.mp3"
 },
 {
  "name": "055AnthimaSthithi.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/055AnthimaSthithi.mp3"
 },
 {
  "name": "066Anubandhamu01.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/066Anubandhamu01.mp3"
 },
 {
  "name": "077Anubandhamu02.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%85%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B0%82%E0%B0%B5%E0%B1%88%E0%B0%AA%E0%B1%81-srcm\/077Anubandhamu02.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_01_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_01_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_02_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_02_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_03_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_03_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_04_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_04_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_05_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_05_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_06_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_06_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_07_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_07_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_08_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_08_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_09_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_09_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-1_10_of_10~1.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-1\/RuthuVaani_Vol-1_10_of_10~1.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_01_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_01_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_02_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_02_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_03_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_03_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_04_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_04_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_05_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_05_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_06_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_06_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_07_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_07_of_08.mp3"
 },
 {
  "name": "RuthuVaani_Vol-2_08_of_08.mp3",
  "url": "https:\/\/babujisahajmarg.in\/assests\/BabujiTeluguAudioBooks\/%E0%B0%8B%E0%B0%A4%E0%B0%B5%E0%B0%BE%E0%B0%A3%E0%B0%BF-2\/RuthuVaani_Vol-2_08_of_08.mp3"
 },
 {
  "name": "1976 ashram opening day.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/1976 ashram opening day.jpg"
 },
 {
  "name": "20190830_164923.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20190830_164923.jpg"
 },
 {
  "name": "20190912_080302.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20190912_080302.jpg"
 },
 {
  "name": "20200711_082648.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200711_082648.jpg"
 },
 {
  "name": "20200711_082722.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200711_082722.jpg"
 },
 {
  "name": "20200717_143525.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_143525.png"
 },
 {
  "name": "20200717_143606.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_143606.png"
 },
 {
  "name": "20200717_143755.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_143755.png"
 },
 {
  "name": "20200717_144531.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_144531.png"
 },
 {
  "name": "20200717_150252.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_150252.png"
 },
 {
  "name": "20200717_155711.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155711.png"
 },
 {
  "name": "20200717_155741.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155741.png"
 },
 {
  "name": "20200717_155808.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155808.png"
 },
 {
  "name": "20200717_155831.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155831.png"
 },
 {
  "name": "20200717_155858.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155858.png"
 },
 {
  "name": "20200717_155924.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155924.png"
 },
 {
  "name": "20200717_155946.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_155946.png"
 },
 {
  "name": "20200717_160005.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_160005.png"
 },
 {
  "name": "20200717_160040.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200717_160040.png"
 },
 {
  "name": "20200718_100829.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200718_100829.jpg"
 },
 {
  "name": "20200720_094817.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200720_094817.png"
 },
 {
  "name": "20200728_211759.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200728_211759.png"
 },
 {
  "name": "20200815_074245.png",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/20200815_074245.png"
 },
 {
  "name": "At home.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/At home.jpg"
 },
 {
  "name": "Babuji room inside 2017.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Babuji room inside 2017.jpg"
 },
 {
  "name": "cell phone 1425.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/cell phone 1425.jpg"
 },
 {
  "name": "cell phone 1526.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/cell phone 1526.jpg"
 },
 {
  "name": "cell phone 1527.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/cell phone 1527.jpg"
 },
 {
  "name": "cell phone 1528.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/cell phone 1528.jpg"
 },
 {
  "name": "Entrance Gate of ashram.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Entrance Gate of ashram.jpg"
 },
 {
  "name": "Holly feet.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Holly feet.jpg"
 },
 {
  "name": "Hookaa.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Hookaa.jpg"
 },
 {
  "name": "images.jpeg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/images.jpeg"
 },
 {
  "name": "IMG-20181228-WA0055.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20181228-WA0055.jpg"
 },
 {
  "name": "IMG-20190303-WA0016.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190303-WA0016.jpg"
 },
 {
  "name": "IMG-20190306-WA0037.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190306-WA0037.jpg"
 },
 {
  "name": "IMG-20190306-WA0040.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190306-WA0040.jpg"
 },
 {
  "name": "IMG-20190306-WA0041.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190306-WA0041.jpg"
 },
 {
  "name": "IMG-20190306-WA0042.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190306-WA0042.jpg"
 },
 {
  "name": "IMG-20190306-WA0045.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190306-WA0045.jpg"
 },
 {
  "name": "IMG-20190402-WA0042.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190402-WA0042.jpg"
 },
 {
  "name": "IMG-20190407-WA0063.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190407-WA0063.jpg"
 },
 {
  "name": "IMG-20190408-WA0013.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190408-WA0013.jpg"
 },
 {
  "name": "IMG-20190409-WA0034.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190409-WA0034.jpg"
 },
 {
  "name": "IMG-20190425-WA0012.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190425-WA0012.jpg"
 },
 {
  "name": "IMG-20190426-WA0084.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190426-WA0084.jpg"
 },
 {
  "name": "IMG-20190614-WA0002.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190614-WA0002.jpg"
 },
 {
  "name": "IMG-20190722-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190722-WA0010.jpg"
 },
 {
  "name": "IMG-20190815-WA0001.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190815-WA0001.jpg"
 },
 {
  "name": "IMG-20190902-WA0077.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0077.jpg"
 },
 {
  "name": "IMG-20190902-WA0084.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0084.jpg"
 },
 {
  "name": "IMG-20190902-WA0085.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0085.jpg"
 },
 {
  "name": "IMG-20190902-WA0087.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0087.jpg"
 },
 {
  "name": "IMG-20190902-WA0088.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0088.jpg"
 },
 {
  "name": "IMG-20190902-WA0090.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0090.jpg"
 },
 {
  "name": "IMG-20190902-WA0093.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0093.jpg"
 },
 {
  "name": "IMG-20190902-WA0098.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0098.jpg"
 },
 {
  "name": "IMG-20190902-WA0099.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0099.jpg"
 },
 {
  "name": "IMG-20190902-WA0101.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0101.jpg"
 },
 {
  "name": "IMG-20190902-WA0107.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0107.jpg"
 },
 {
  "name": "IMG-20190902-WA0109.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0109.jpg"
 },
 {
  "name": "IMG-20190902-WA0111.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0111.jpg"
 },
 {
  "name": "IMG-20190902-WA0122.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190902-WA0122.jpg"
 },
 {
  "name": "IMG-20190915-WA0025.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190915-WA0025.jpg"
 },
 {
  "name": "IMG-20190917-WA0000.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20190917-WA0000.jpg"
 },
 {
  "name": "IMG-20191010-WA0003.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191010-WA0003.jpg"
 },
 {
  "name": "IMG-20191011-WA0005.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191011-WA0005.jpg"
 },
 {
  "name": "IMG-20191011-WA0006.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191011-WA0006.jpg"
 },
 {
  "name": "IMG-20191011-WA0007.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191011-WA0007.jpg"
 },
 {
  "name": "IMG-20191019-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191019-WA0010.jpg"
 },
 {
  "name": "IMG-20191020-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191020-WA0010.jpg"
 },
 {
  "name": "IMG-20191020-WA0011.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191020-WA0011.jpg"
 },
 {
  "name": "IMG-20191029-WA0009.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191029-WA0009.jpg"
 },
 {
  "name": "IMG-20191029-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191029-WA0010.jpg"
 },
 {
  "name": "IMG-20191102-WA0005.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191102-WA0005.jpg"
 },
 {
  "name": "IMG-20191103-WA0001.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191103-WA0001.jpg"
 },
 {
  "name": "IMG-20191103-WA0013.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191103-WA0013.jpg"
 },
 {
  "name": "IMG-20191104-WA0000.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191104-WA0000.jpg"
 },
 {
  "name": "IMG-20191110-WA0001.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191110-WA0001.jpg"
 },
 {
  "name": "IMG-20191110-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20191110-WA0010.jpg"
 },
 {
  "name": "IMG-20200101-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200101-WA0024.jpg"
 },
 {
  "name": "IMG-20200104-WA0001.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200104-WA0001.jpg"
 },
 {
  "name": "IMG-20200105-WA0013.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200105-WA0013.jpg"
 },
 {
  "name": "IMG-20200110-WA0013.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200110-WA0013.jpg"
 },
 {
  "name": "IMG-20200113-WA0015.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200113-WA0015.jpg"
 },
 {
  "name": "IMG-20200116-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200116-WA0024.jpg"
 },
 {
  "name": "IMG-20200118-WA0016.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200118-WA0016.jpg"
 },
 {
  "name": "IMG-20200119-WA0023.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200119-WA0023.jpg"
 },
 {
  "name": "IMG-20200127-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200127-WA0020.jpg"
 },
 {
  "name": "IMG-20200128-WA0003.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200128-WA0003.jpg"
 },
 {
  "name": "IMG-20200129-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200129-WA0020.jpg"
 },
 {
  "name": "IMG-20200130-WA0016.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200130-WA0016.jpg"
 },
 {
  "name": "IMG-20200130-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200130-WA0020.jpg"
 },
 {
  "name": "IMG-20200131-WA0004.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200131-WA0004.jpg"
 },
 {
  "name": "IMG-20200202-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200202-WA0024.jpg"
 },
 {
  "name": "IMG-20200205-WA0073.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200205-WA0073.jpg"
 },
 {
  "name": "IMG-20200209-WA0032.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200209-WA0032.jpg"
 },
 {
  "name": "IMG-20200216-WA0014.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200216-WA0014.jpg"
 },
 {
  "name": "IMG-20200217-WA0027.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200217-WA0027.jpg"
 },
 {
  "name": "IMG-20200223-WA0017.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200223-WA0017.jpg"
 },
 {
  "name": "IMG-20200227-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200227-WA0010.jpg"
 },
 {
  "name": "IMG-20200229-WA0014.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200229-WA0014.jpg"
 },
 {
  "name": "IMG-20200304-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200304-WA0010.jpg"
 },
 {
  "name": "IMG-20200311-WA0011.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200311-WA0011.jpg"
 },
 {
  "name": "IMG-20200430-WA0005.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0005.jpg"
 },
 {
  "name": "IMG-20200430-WA0006.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0006.jpg"
 },
 {
  "name": "IMG-20200430-WA0007.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0007.jpg"
 },
 {
  "name": "IMG-20200430-WA0008.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0008.jpg"
 },
 {
  "name": "IMG-20200430-WA0009.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0009.jpg"
 },
 {
  "name": "IMG-20200430-WA0014.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0014.jpg"
 },
 {
  "name": "IMG-20200430-WA0015.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0015.jpg"
 },
 {
  "name": "IMG-20200430-WA0018.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0018.jpg"
 },
 {
  "name": "IMG-20200430-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0020.jpg"
 },
 {
  "name": "IMG-20200430-WA0021.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0021.jpg"
 },
 {
  "name": "IMG-20200430-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0024.jpg"
 },
 {
  "name": "IMG-20200430-WA0026.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0026.jpg"
 },
 {
  "name": "IMG-20200430-WA0028.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0028.jpg"
 },
 {
  "name": "IMG-20200430-WA0029.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0029.jpg"
 },
 {
  "name": "IMG-20200430-WA0031.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200430-WA0031.jpg"
 },
 {
  "name": "IMG-20200501-WA0001.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200501-WA0001.jpg"
 },
 {
  "name": "IMG-20200503-WA0002.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200503-WA0002.jpg"
 },
 {
  "name": "IMG-20200504-WA0021.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200504-WA0021.jpg"
 },
 {
  "name": "IMG-20200504-WA0029.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200504-WA0029.jpg"
 },
 {
  "name": "IMG-20200504-WA0056.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200504-WA0056.jpg"
 },
 {
  "name": "IMG-20200507-WA0002.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200507-WA0002.jpg"
 },
 {
  "name": "IMG-20200507-WA0008.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200507-WA0008.jpg"
 },
 {
  "name": "IMG-20200510-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200510-WA0024.jpg"
 },
 {
  "name": "IMG-20200514-WA0028.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200514-WA0028.jpg"
 },
 {
  "name": "IMG-20200514-WA0029.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200514-WA0029.jpg"
 },
 {
  "name": "IMG-20200515-WA0004.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200515-WA0004.jpg"
 },
 {
  "name": "IMG-20200515-WA0045.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200515-WA0045.jpg"
 },
 {
  "name": "IMG-20200516-WA0029.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200516-WA0029.jpg"
 },
 {
  "name": "IMG-20200517-WA0069.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200517-WA0069.jpg"
 },
 {
  "name": "IMG-20200519-WA0003.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200519-WA0003.jpg"
 },
 {
  "name": "IMG-20200519-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200519-WA0024.jpg"
 },
 {
  "name": "IMG-20200522-WA0005.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200522-WA0005.jpg"
 },
 {
  "name": "IMG-20200524-WA0070.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200524-WA0070.jpg"
 },
 {
  "name": "IMG-20200525-WA0028.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200525-WA0028.jpg"
 },
 {
  "name": "IMG-20200525-WA0052.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200525-WA0052.jpg"
 },
 {
  "name": "IMG-20200527-WA0018.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200527-WA0018.jpg"
 },
 {
  "name": "IMG-20200602-WA0008.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200602-WA0008.jpg"
 },
 {
  "name": "IMG-20200603-WA0022.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200603-WA0022.jpg"
 },
 {
  "name": "IMG-20200603-WA0037.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200603-WA0037.jpg"
 },
 {
  "name": "IMG-20200605-WA0031.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200605-WA0031.jpg"
 },
 {
  "name": "IMG-20200609-WA0061.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200609-WA0061.jpg"
 },
 {
  "name": "IMG-20200613-WA0010.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200613-WA0010.jpg"
 },
 {
  "name": "IMG-20200614-WA0036.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200614-WA0036.jpg"
 },
 {
  "name": "IMG-20200617-WA0016.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200617-WA0016.jpg"
 },
 {
  "name": "IMG-20200618-WA0021.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0021.jpg"
 },
 {
  "name": "IMG-20200618-WA0023.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0023.jpg"
 },
 {
  "name": "IMG-20200618-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0024.jpg"
 },
 {
  "name": "IMG-20200618-WA0026.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0026.jpg"
 },
 {
  "name": "IMG-20200618-WA0027.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0027.jpg"
 },
 {
  "name": "IMG-20200618-WA0030.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0030.jpg"
 },
 {
  "name": "IMG-20200618-WA0031.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0031.jpg"
 },
 {
  "name": "IMG-20200618-WA0033.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0033.jpg"
 },
 {
  "name": "IMG-20200618-WA0034.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0034.jpg"
 },
 {
  "name": "IMG-20200618-WA0035.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0035.jpg"
 },
 {
  "name": "IMG-20200618-WA0036.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0036.jpg"
 },
 {
  "name": "IMG-20200618-WA0037.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0037.jpg"
 },
 {
  "name": "IMG-20200618-WA0038.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0038.jpg"
 },
 {
  "name": "IMG-20200618-WA0039.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0039.jpg"
 },
 {
  "name": "IMG-20200618-WA0040.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0040.jpg"
 },
 {
  "name": "IMG-20200618-WA0043.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0043.jpg"
 },
 {
  "name": "IMG-20200618-WA0044.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0044.jpg"
 },
 {
  "name": "IMG-20200618-WA0047.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0047.jpg"
 },
 {
  "name": "IMG-20200618-WA0048.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0048.jpg"
 },
 {
  "name": "IMG-20200618-WA0049.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0049.jpg"
 },
 {
  "name": "IMG-20200618-WA0050.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200618-WA0050.jpg"
 },
 {
  "name": "IMG-20200703-WA0025.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0025.jpg"
 },
 {
  "name": "IMG-20200703-WA0027.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0027.jpg"
 },
 {
  "name": "IMG-20200703-WA0029.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0029.jpg"
 },
 {
  "name": "IMG-20200703-WA0030.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0030.jpg"
 },
 {
  "name": "IMG-20200703-WA0033.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0033.jpg"
 },
 {
  "name": "IMG-20200703-WA0050.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200703-WA0050.jpg"
 },
 {
  "name": "IMG-20200705-WA0041.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200705-WA0041.jpg"
 },
 {
  "name": "IMG-20200709-WA0034.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200709-WA0034.jpg"
 },
 {
  "name": "IMG-20200709-WA0077.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200709-WA0077.jpg"
 },
 {
  "name": "IMG-20200709-WA0078.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200709-WA0078.jpg"
 },
 {
  "name": "IMG-20200709-WA0079.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200709-WA0079.jpg"
 },
 {
  "name": "IMG-20200712-WA0014.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200712-WA0014.jpg"
 },
 {
  "name": "IMG-20200715-WA0021.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200715-WA0021.jpg"
 },
 {
  "name": "IMG-20200717-WA0000.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200717-WA0000.jpg"
 },
 {
  "name": "IMG-20200717-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200717-WA0024.jpg"
 },
 {
  "name": "IMG-20200717-WA0027.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20200717-WA0027.jpg"
 },
 {
  "name": "IMG-20230503-WA0027.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0027.jpg"
 },
 {
  "name": "IMG-20230503-WA0033.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0033.jpg"
 },
 {
  "name": "IMG-20230503-WA0053.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0053.jpg"
 },
 {
  "name": "IMG-20230503-WA0054.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0054.jpg"
 },
 {
  "name": "IMG-20230503-WA0056.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0056.jpg"
 },
 {
  "name": "IMG-20230503-WA0057.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0057.jpg"
 },
 {
  "name": "IMG-20230503-WA0058.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0058.jpg"
 },
 {
  "name": "IMG-20230503-WA0059.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0059.jpg"
 },
 {
  "name": "IMG-20230503-WA0060.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0060.jpg"
 },
 {
  "name": "IMG-20230503-WA0062.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0062.jpg"
 },
 {
  "name": "IMG-20230503-WA0063.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0063.jpg"
 },
 {
  "name": "IMG-20230503-WA0064.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230503-WA0064.jpg"
 },
 {
  "name": "IMG-20230504-WA0042.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230504-WA0042.jpg"
 },
 {
  "name": "IMG-20230810-WA0030.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20230810-WA0030.jpg"
 },
 {
  "name": "IMG-20231122-WA0044.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20231122-WA0044.jpg"
 },
 {
  "name": "IMG-20240126-WA0026.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240126-WA0026.jpg"
 },
 {
  "name": "IMG-20240202-WA0028.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240202-WA0028.jpg"
 },
 {
  "name": "IMG-20240203-WA0019.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240203-WA0019.jpg"
 },
 {
  "name": "IMG-20240212-WA0014.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240212-WA0014.jpg"
 },
 {
  "name": "IMG-20240214-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240214-WA0020.jpg"
 },
 {
  "name": "IMG-20240215-WA0006.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240215-WA0006.jpg"
 },
 {
  "name": "IMG-20240215-WA0007.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240215-WA0007.jpg"
 },
 {
  "name": "IMG-20240215-WA0008.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240215-WA0008.jpg"
 },
 {
  "name": "IMG-20240219-WA0026.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240219-WA0026.jpg"
 },
 {
  "name": "IMG-20240221-WA0033.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240221-WA0033.jpg"
 },
 {
  "name": "IMG-20240223-WA0030.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240223-WA0030.jpg"
 },
 {
  "name": "IMG-20240225-WA0024.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240225-WA0024.jpg"
 },
 {
  "name": "IMG-20240225-WA0025.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240225-WA0025.jpg"
 },
 {
  "name": "IMG-20240228-WA0046.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240228-WA0046.jpg"
 },
 {
  "name": "IMG-20240229-WA0028.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240229-WA0028.jpg"
 },
 {
  "name": "IMG-20240303-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240303-WA0020.jpg"
 },
 {
  "name": "IMG-20240305-WA0020.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240305-WA0020.jpg"
 },
 {
  "name": "IMG-20240308-WA0050.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240308-WA0050.jpg"
 },
 {
  "name": "IMG-20240309-WA0023.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240309-WA0023.jpg"
 },
 {
  "name": "IMG-20240310-WA0032.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/IMG-20240310-WA0032.jpg"
 },
 {
  "name": "In abroad.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/In abroad.jpg"
 },
 {
  "name": "Present meditation room .jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Present meditation room .jpg"
 },
 {
  "name": "Present arrangement.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Present arrangement.jpg"
 },
 {
  "name": "Present inside meditation room.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Present inside meditation room.jpg"
 },
 {
  "name": "Present inside.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Present inside.jpg"
 },
 {
  "name": "Visiting ashram.jpg",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Gallery\/Visiting ashram.jpg"
 },
 {
  "name": "2nd method of cleanin in telugu.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/2nd%20method%20of%20cleanin%20in%20telugu.mp4"
 },
 {
  "name": "2nd method of cleaning.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/2nd%20method%20of%20cleaning.mp4"
 },
 {
  "name": "3&4 point Japa english.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/3&4%20point%20Japa%20english.mp4"
 },
 {
  "name": "3&4 point Japa in telugu.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/3&4%20point%20Japa%20in%20telugu.mp4"
 },
 {
  "name": "75 years photo vedio.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/75%20years%20photo%20vedio.mp4"
 },
 {
  "name": "Cleaning method in English-2.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Cleaning%20method%20in%20English-2.mp4"
 },
 {
  "name": "cleaning method in Telugu-1.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/cleaning%20method%20in%20Telugu-1.mp4"
 },
 {
  "name": "Cleaning method in Telugu-2.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Cleaning%20method%20in%20Telugu-2.mp4"
 },
 {
  "name": "Cleaning3 (Ocean of Bliss)English.mov",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Cleaning3%20(Ocean%20of%20Bliss)English.mov"
 },
 {
  "name": "Cleaning3 (Ocean of Bliss)Telugu.mov",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Cleaning3%20(Ocean%20of%20Bliss)Telugu.mov"
 },
 {
  "name": "Clening method in english-1.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Clening%20method%20in%20english-1.mp4"
 },
 {
  "name": "Goal of Human life.mov",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Goal%20of%20Human%20life.mov"
 },
 {
  "name": "Meditation on Point A and B.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Meditation%20on%20Point%20A%20and%20B.mp4"
 },
 {
  "name": "Panoramic view 2 Eng.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Panoramic%20view%202%20Eng.mp4"
 },
 {
  "name": "Panoramic view Telugu.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Panoramic%20view%20Telugu.mp4"
 },
 {
  "name": "Prayer in English.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Prayer%20in%20English.mp4"
 },
 {
  "name": "Prayer in Telugu.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Prayer%20in%20Telugu.mp4"
 },
 {
  "name": "Sahaj Marg.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Sahaj%20Marg.mp4"
 },
 {
  "name": "Special Meditation in Telugu.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Special%20Meditation%20in%20Telugu.mp4"
 },
 {
  "name": "Special Meditation...mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/Special%20Meditation...mp4"
 },
 {
  "name": "VID-20200511-WA0012.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/VID-20200511-WA0012.mp4"
 },
 {
  "name": "VID-20200721-WA0003.mp4",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/VID-20200721-WA0003.mp4"
 },
 {
  "name": "125th Birthday",
  "url": "https:\/\/babujisahajmarg.in\/assests\/Videos\/125.mp4"
 }
]

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getFilesById(id: any) {
    let query = '';
    query = id;
    if (id === 'LalajiBooks') {
      query = 'Lalaji%20Books';
    }
    if (id === 'BabujiAutobiography') {
      query = 'Books\/Autobiography';
    }
    if (id === 'BabujiAudio') {
      query = 'assests\/Audio';
    }
    if (id === 'RESEARCH BOOKS & OTHER BOOKS') {
      query = 'Esotericism';
    }
    if (id === 'Videos') {
      query = 'assests\/Videos';
    }

    
    let newFiles = [];
    if (this.Data && this.Data.length > 0) {
      newFiles = this.Data.filter((item: any) => {
          return item.url && item.url.includes(query);
      });
  }

  if (id === "Videos") {
    let newFiles2 = [];
    query = 'youtube'
    if (this.Data && this.Data.length > 0) {
      newFiles2 = this.Data.filter((item: any) => {
          return item.url && item.url.includes(query);
      });
    }
    newFiles = newFiles.concat(newFiles2)
  }

    return newFiles;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
