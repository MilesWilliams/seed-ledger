import { AuthGuard } from "./auth.guard";
import { SeedsLoadedGuard } from "./seed.guard";

export const guards = [ SeedsLoadedGuard, AuthGuard ]