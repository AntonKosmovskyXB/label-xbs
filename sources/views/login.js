import {JetView} from "webix-jet";


export default class LoginView extends JetView {
	config() {
		const loginForm = {
			view: "form",
			localId: "loginForm",
			height: 250,
			width: 400,
			borderless: false,
			margin: 10,
			rows: [
				{
					view: "text",
					bottomPadding: 15,
					name: "login",
					label: "User Name",
					labelPosition: "top",
					invalidMessage: "Please, enter login",
					required: true
				},
				{
					view: "text",
					bottomPadding: 15,
					type: "password",
					name: "pass",
					label: "Password",
					labelPosition: "top",
					invalidMessage: "Please, enter password",
					required: true
				},
				{
					view: "button",
					value: "Log in",
					click: () => this.doLogin()
				}
			]
		};

		return {
			rows: [
				{},
				{
					cols: [
						{},
						loginForm,
						{}
					]
				},
				{}
			]
		};
	}

	doLogin() {
		const user = this.app.getService("user");
		const form = this.$$("loginForm");
		if (form.validate()) {
			const data = form.getValues();
			user.login(data.login, data.pass).catch(() => {
				webix.message("Invalid login or password");
			});
		}
	}
}
