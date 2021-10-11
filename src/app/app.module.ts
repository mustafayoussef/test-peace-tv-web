import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '@component/header/header.component';
import { FaqComponent } from '@component/faq/faq.component';
import { FooterComponent } from '@component/footer/footer.component';
import { IntroComponent } from '@component/home/intro/intro.component';
import { SectionLangComponent } from '@component/home/section-lang/section-lang.component';
import { BanglaComponent } from '@page/home/bangla/bangla.component';
import { ChineseComponent } from '@page/home/chinese/chinese.component';
import { EnglishComponent } from '@page/home/english/english.component';
import { UrduComponent } from '@page/home/urdu/urdu.component';
import { LandingComponent } from '@page/landing/landing.component';
import { NotFoundComponent } from '@page/not-found/not-found.component';
import { PricingComponent } from '@page/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SectionLangComponent,
    FaqComponent,
    LandingComponent,
    PricingComponent,
    EnglishComponent,
    UrduComponent,
    BanglaComponent,
    ChineseComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
