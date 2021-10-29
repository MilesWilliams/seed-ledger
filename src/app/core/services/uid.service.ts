// Import the core angular services.
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
    providedIn: "root"
})
export class UIDService {

    private id: number = Date.now();

    // ---
    // PUBLIC METHODS.
    // ---

    // I get the next available unique ID.
    public next(): string {

        return (`aria-id-${++this.id}`);

    }

}
