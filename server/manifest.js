export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.dvpXr4q0.js",app:"_app/immutable/entry/app.CDYCgjPe.js",imports:["_app/immutable/entry/start.dvpXr4q0.js","_app/immutable/chunks/_P52JCAK.js","_app/immutable/chunks/CwjP1sYx.js","_app/immutable/chunks/D6uefOkH.js","_app/immutable/entry/app.CDYCgjPe.js","_app/immutable/chunks/CwjP1sYx.js","_app/immutable/chunks/BDMhi59c.js","_app/immutable/chunks/DNBqt5F-.js","_app/immutable/chunks/C9ISfvow.js","_app/immutable/chunks/D6uefOkH.js","_app/immutable/chunks/DCn-bu_Y.js","_app/immutable/chunks/DSaacpeL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/globs","/globs/__data.json","/test","/#globs"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
