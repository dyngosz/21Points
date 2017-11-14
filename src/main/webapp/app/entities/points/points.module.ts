import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TwentyOnePointsSharedModule} from '../../shared';
import {TwentyOnePointsAdminModule} from '../../admin/admin.module';
import {
    PointsComponent,
    PointsDeleteDialogComponent,
    PointsDeletePopupComponent,
    PointsDetailComponent,
    PointsDialogComponent,
    PointsPopupComponent,
    pointsPopupRoute,
    PointsPopupService,
    PointsResolvePagingParams,
    pointsRoute,
    PointsService,
} from './';

const ENTITY_STATES = [
    ...pointsRoute,
    ...pointsPopupRoute,
];

@NgModule({
    imports: [
        TwentyOnePointsSharedModule,
        TwentyOnePointsAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PointsComponent,
        PointsDetailComponent,
        PointsDialogComponent,
        PointsDeleteDialogComponent,
        PointsPopupComponent,
        PointsDeletePopupComponent,
    ],
    entryComponents: [
        PointsComponent,
        PointsDialogComponent,
        PointsPopupComponent,
        PointsDeleteDialogComponent,
        PointsDeletePopupComponent,
    ],
    providers: [
        PointsService,
        PointsPopupService,
        PointsResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyOnePointsPointsModule {}
