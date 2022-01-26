const headerApp = Vue.createApp({
	data(){
		return {
			buttons: [
				{
					id: 1,
					title: "Michael Burnes",
					url: "./#home"
				},
				{
					id: 2,
					title: "Projects",
					url: "./#projects"
				},
				{
					id: 3,
					title: "Resume",
					url: "./#resume"
				},
			]
		}
	}
})

headerApp.component('item', {
	props: ['title', 'url'],
	template: `<a v-bind:href="url">{{ title }}</a>`
})

headerApp.mount('#navbar')

var req = new XMLHttpRequest;
const contentApp = Vue.createApp({
	beforeMount(){
		var currentUrl = window.location.href;
		//check if the current url is /index.html, /index, or /. Only because this may change in the future.
		if(currentUrl.match(".*\/#home$|.*/$") != null){
			req.open("GET", "./content/main.html", false);
		}
		else if(currentUrl.match(".*\/projects.html$|.*\/projects$") != null){
			req.open("GET", "./content/projects.html");
		}
		else if(currentUrl.match(".*\/resume.html$|.*\/resume$") != null){
			req.open("GET", "./content/resume.html");
		}
		else
			return {text: "ERROR"};
		req.send();
		this.response = req.responseText;
	},
	data(){
		return {
			response: "",
			url: currentUrl
		};
	},
	template: `<div v-html="response"></div>`
})


contentApp.mount('#app')