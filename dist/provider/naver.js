"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = require("../provider");
var Naver = (function (_super) {
    __extends(Naver, _super);
    function Naver(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://nid.naver.com/oauth2.0/authorize';
        this.defaults = {
            responseType: 'code'
        };
    }
    return Naver;
}(provider_1.OAuthProvider));
exports.Naver = Naver;
