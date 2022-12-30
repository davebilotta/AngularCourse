import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        // This is lazy-loaded
        path: 'inbox',
        loadChildren: () =>
            import('./inbox/inbox.module').then((mod) => mod.InboxModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
