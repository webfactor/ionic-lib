import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {
    protected baseUrl: string = '';

    constructor(protected http: HttpClient) {}

    setBaseUrl(baseUrl: string): void {
        let lastChar = _.split(baseUrl, '').pop();
        if (lastChar != '/') baseUrl += '/';
        this.baseUrl = baseUrl;
    }

    get(endpoint: string, params?: any, options?: any): Observable<any> {
        options = this.getOptions(options, params);
        return this.http.get(this.baseUrl + endpoint, options);
    }

    post(endpoint: string, body: any, options?: any): Observable<any> {
        options = this.getOptions(options, null);
        return this.http.post(this.baseUrl + endpoint, body, options);
    }

    put(endpoint: string, body: any, options?: any): Observable<any> {
        options = this.getOptions(options, null);
        return this.http.put(this.baseUrl + endpoint, body, options);
    }

    delete(endpoint: string, options?: any): Observable<any> {
        options = this.getOptions(options, null);
        return this.http.delete(this.baseUrl + endpoint, options);
    }

    patch(endpoint: string, body: any, options?: any): Observable<any> {
        options = this.getOptions(options, null);
        return this.http.patch(this.baseUrl + endpoint, body, options);
    }

    private headers(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        return headers;
    }

    private getOptions(
        options?: any,
        params?: any
    ): { headers?: HttpHeaders; params?: HttpParams; observe?: string; responseType?: string } {
        if (!options) options = {};
        options.headers = this.headers();
        options.observe = 'response';

        if (params) {
            let httpParams = new HttpParams();
            for (let key in params) {
                let value = params[key];
                if (value) httpParams = httpParams.set(key, value);
            }
            options.params = httpParams;
        }

        return options;
    }
}
