const headerApp = Vue.createApp({
	data(){
		return {
			buttons: [
				{
					id: 1,
					title: "Michael Burnes",
					url: "./"
				},
				{
					id: 2,
					title: "Projects",
					url: "./projects.html"
				},
				{
					id: 3,
					title: "Resume",
					url: "./resume.html"
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

		//The XMLHttpRequest is synchronus. Which is less than optimal.
		//This is a hack, and it is done to prevent me from pulling more hair
		//than I've already pulled out of my head.
		req.open("GET", "./content/main.html", false);
		req.send();
		this.response = req.responseText;
	},
	data(){
		return {
			response: ""
		};
	},
	template: `<div v-html="response"></div>`
})


contentApp.mount('#app')