import {JetView} from "webix-jet";

export default class userManagerView extends JetView {
	config() {
		return {
			view: "usermanager",
			localId: "usermanager",
			url: "https://docs.webix.com/usermanager-backend/"
		};
	}

	init() {
		const um = this.$$("usermanager");
		console.log(um.getService("local").users(true).serialize());
	}
}
