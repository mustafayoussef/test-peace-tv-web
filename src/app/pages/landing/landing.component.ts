import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  // English Section
  sectionID_En = 'english';
  sectionStyle_En = 'row';
  logo_En: string = 'assets/images/section-lang/en/en-logo.png';
  bgBanner_En: string = '"assets/images/section-lang/en/bg-Images.png"';
  bannerTitle_En: string = 'Over 60 Renowned Islamic English Speakers from all over the World';
  aboutSectionTitle_En: string = 'The World’s First Religious HD TV Satellite Channel';
  bgAbout_En: string = 'assets/images/section-lang/en/bg-Title.png';
  aboutSectionP_En: string = `Peace TV’s global vision and mission is to create a better awareness and understanding of Islam as a
  just, righteous and peaceful way of life for all humanity, as well as to remove misconceptions,
  false fear and hate of Islam and Muslims globally.`;
  aboutBtn_En: string = '#2A4C76';
  link_En: string = 'english';




  // Urdu Section
  sectionID_Urdu = 'urdu';
  sectionStyle_Urdu = 'row-reverse';
  logo_Urdu: string = 'assets/images/section-lang/urdu/ur-logo.png';
  bgBanner_Urdu: string = '"assets/images/section-lang/urdu/bg-Images.png"';
  bannerTitle_Urdu: string = 'Over 50 Renowned Islamic Urdu Speakers';
  aboutSectionTitle_Urdu: string = 'The World’s First HD Islamic Urdu TV Satellite Channel';
  bgAbout_Urdu: string = '"assets/images/section-lang/urdu/bg-Title.png"';
  aboutSectionP_Urdu: string = `Peace TV Urdu can be viewed throughout the world on HD Television, as well as Live Online. It beckons the interest and support of the public at large to make it a household TV channel across the globe.`;
  aboutBtn_Urdu: string = '#143B21';
  link_Urdu: string = 'urdu';




  // Bangla Section
  sectionID_Bangla = 'bangla';
  sectionStyle_Bangla = 'row';
  logo_Bangla: string = 'assets/images/section-lang/bangla/ban-logo.png';
  bgBanner_Bangla: string = '"assets/images/section-lang/bangla/bg-Images.png"';
  bannerTitle_Bangla: string = 'Over 40 Renowned Islamic Bangla Speakers';
  aboutSectionTitle_Bangla: string = 'The World’s First HD Islamic Bangla TV Satellite Channel';
  bgAbout_Bangla: string = '"assets/images/section-lang/bangla/bg-Title.png"';
  aboutSectionP_Bangla: string = `Peace TV Bangla can be viewed throughout the world on HD Television, as well as Live Online.`;
  aboutBtn_Bangla: string = '#5F1D5C';
  link_Bangla: string = 'bangla';




  // Chinese Section
  sectionID_Chinese = 'chinese';
  sectionStyle_Chinese = 'row-reverse';
  logo_Chinese: string = 'assets/images/section-lang/chinese/chin-logo.png';
  bgBanner_Chinese: string = '"assets/images/section-lang/chinese/bg-Images.png"';
  bannerTitle_Chinese: string = 'Over 25 Renowned Islamic Chinese Speakers';
  aboutSectionTitle_Chinese: string = 'The World’s First HD Islamic Chinese TV Satellite Channel';
  bgAbout_Chinese: string = '"assets/images/section-lang/chinese/bg-Title.png"';
  aboutSectionP_Chinese: string = `Peace TV Chinese can be viewed throughout the world on HD Television, as well as Live Online.`;
  aboutBtn_Chinese: string = '#D32B2D';
  link_Chinese: string = 'chinese';

  constructor() { }

  ngOnInit(): void { }
}
