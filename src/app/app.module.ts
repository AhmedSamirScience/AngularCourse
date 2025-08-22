import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";


@NgModule({  
    declarations: [AboutComponent],
    imports: [AppComponent]

})

export class AppModule { }