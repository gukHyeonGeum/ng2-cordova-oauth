import { OAuthProvider, IOAuthOptions } from "../provider";
export interface NaverOptions extends IOAuthOptions {
}
export declare class Naver extends OAuthProvider {
    options: NaverOptions;
    protected authUrl: string;
    protected defaults: Object;
    constructor(options?: NaverOptions);
}
