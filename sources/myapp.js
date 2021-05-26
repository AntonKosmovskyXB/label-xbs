/* eslint-disable no-undef */
import {JetApp, EmptyRouter, HashRouter, plugins} from "webix-jet";

import "./styles/app.css";
import session from "./models/session";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug: !PRODUCTION,
			start: "/login"
		};

		super({...defaults, ...config});
		this.use(plugins.User, {model: session, afterLogin: "/top/userManager", afterLogout: "/login"});
	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => new MyApp().render());
}
