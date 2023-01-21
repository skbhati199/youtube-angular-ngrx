import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";

const  data = [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatListModule, MatTabsModule]

@NgModule({
  exports:data,
  imports:data
})
export class MaterialModule{}
