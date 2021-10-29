import { AuthService } from './auth.service';
import { CoreService } from './core.service';
import { UIDService } from './uid.service';


export const services: any[] = [
    CoreService,
    UIDService,
    AuthService
];
