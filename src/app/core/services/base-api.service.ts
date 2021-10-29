
import { Config } from './../config/app.config';
import { Observable, of } from 'rxjs';

export class ApiService {

    protected _endpoint: string = '';
    protected _domain: string = Config.api_base;
    // protected _version: string | number = 1

    constructor(_endpoint?: string) {
        if (_endpoint)
            this._endpoint = _endpoint;
    }

    protected init(_endpoint: string) {
        this._endpoint = _endpoint;
    }

    /**
     *
     * @readonly
     * @type {string}
     * @memberof ApiService
     */
    get Domain(): string {
        return this._domain;
    }

    /**
     *
     * @type {string}
     * @memberof ApiService
     */
    get Endpoint(): string {
        return this._endpoint;
    }

    /**
     *
     * @memberof ApiService
     */
    set Endpoint(value: string) {
        this._endpoint = value;
    }
    /**
     *
     * @param {string} [modifier]
     * @returns {string}
     * @memberof ApiService
     */
    Url(modifier?: string): string {
        console.log(this._domain);
        if (this.Endpoint && this.Endpoint.length > 0)
            return modifier ? `${this._domain}/${this._endpoint}/${modifier}` : `${this._domain}/${this._endpoint}`;

        else
            return modifier ? `${this._domain}/${modifier}` : `${this._domain}`;
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed:`, error);
            return of(result as T);
        };
    }

}
