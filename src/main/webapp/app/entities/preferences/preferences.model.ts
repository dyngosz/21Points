import { BaseEntity, User } from './../../shared';

export const enum Unit {
    'kg',
    'lb'
}

export class Preferences implements BaseEntity {
    constructor(
        public id?: number,
        public weightUnits?: Unit,
        public weeklyGoal?: number,
        public user?: User,
    ) {
    }
}
