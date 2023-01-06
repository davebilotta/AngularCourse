import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModsHomeComponent } from './mods-home/mods-home.component';

const routes: Routes = [{ path: '', component: ModsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
