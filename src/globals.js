/* eslint-disable no-undef */
import 'whatwg-fetch';

export const fetch = window.fetch;
const win = window;
export {win as window};
