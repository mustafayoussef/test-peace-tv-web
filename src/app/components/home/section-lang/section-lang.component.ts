import { Component, Input, OnInit } from '@angular/core';
// import { url } from 'inspector';

@Component({
  selector: 'app-section-lang',
  templateUrl: './section-lang.component.html',
  styleUrls: ['./section-lang.component.scss'],
})
export class SectionLangComponent implements OnInit {
  @Input() sectionID: string | undefined;
  @Input() sectionStyle: string | undefined;
  @Input() logo: string | undefined;
  @Input() bgBanner: string | undefined;
  @Input() bannerTitle: string | undefined;
  @Input() aboutSectionBg: string | undefined;
  @Input() aboutSectionTitle: string | undefined;
  @Input() aboutSectionP: string | undefined;
  @Input() aboutSectionBtn: string | undefined;
  @Input() link: string | undefined;
  
  constructor() { }

  ngOnInit(): void { }
}
