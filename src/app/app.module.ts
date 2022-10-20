import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './formule1/containers/container/container.component';
import { ComponentComponent } from './formule1/components/component/component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ContainerComponent, ComponentComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
