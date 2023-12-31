/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} item
 * @property {string} name
 * @property {number} price
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://35.174.106.148:3222";

export const MEMBERS = [
  "อติวงศ์ สุชาโต",
  "โปรดปราน บุณยพุกกณะ",
  "ณัฐวุฒิ หนูไฟโรจน์",
];
