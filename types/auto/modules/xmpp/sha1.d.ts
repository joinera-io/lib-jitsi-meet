export { SHA1 as default };
declare namespace SHA1 {
    export function b64_hmac_sha1(key: any, data: any): string;
    export function b64_sha1(s: any): string;
    export { binb2str };
    export { core_hmac_sha1 };
    export function str_hmac_sha1(key: any, data: any): string;
    export function str_sha1(s: any): string;
}
declare function binb2str(bin: any): string;
declare function core_hmac_sha1(key: any, data: any): number[];
