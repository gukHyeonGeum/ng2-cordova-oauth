import { OAuthProvider, IOAuthOptions } from "../provider";

/*
 * Configuration options for using Naver oauth
 * @deprecated
 */
export interface NaverOptions extends IOAuthOptions {
}

export class Naver extends OAuthProvider {

    options: NaverOptions;
    protected authUrl: string = 'https://nid.naver.com/oauth2.0/authorize';
    protected defaults: Object = {
      responseType: 'code'
    };

    constructor(options: NaverOptions = {}) {
        super(options);
    }
}
