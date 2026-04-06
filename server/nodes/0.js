import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D9eVeV3J.js","_app/immutable/chunks/C9ISfvow.js","_app/immutable/chunks/CwjP1sYx.js","_app/immutable/chunks/DSaacpeL.js","_app/immutable/chunks/XlD7PU82.js","_app/immutable/chunks/Disyqb3h.js"];
export const stylesheets = ["_app/immutable/assets/OutlinedText.DJxfTr_p.css","_app/immutable/assets/0.BG-4my8d.css"];
export const fonts = [];
