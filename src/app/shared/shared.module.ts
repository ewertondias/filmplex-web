import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Join } from './pipes/join.pipe.ts.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
    declarations: [Join.Pipe.TsPipe, JoinPipe, SafeUrlPipe],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
