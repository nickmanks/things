/* eslint-disable no-undef */
import 'whatwg-fetch';

export const fetch = window.fetch;
export const localStorage = window.localStorage;
export const location = window.location;
export const document = window.document;
const win = window;
export {win as window};
