import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const components: any = [];

const modules: any = [MatInputModule, MatIconModule];

@NgModule({
    imports: [CommonModule],
    declarations: components,
    exports: modules,
})
export class MainDomainsModule {}
