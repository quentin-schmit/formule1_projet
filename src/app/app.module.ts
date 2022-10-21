import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './formule1/containers/pilote container/pilote.component';
import { ComponentComponent } from './formule1/components/component/component.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './formule1/containers/course container/course.component';

export const routes: Routes = [
  { path: 'pilote', component: ContainerComponent },
  { path: 'course', component: CoursesComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, ContainerComponent, ComponentComponent],
  bootstrap: [AppComponent],
  providers: [],
  exports: [RouterModule],
})
export class AppModule {}
