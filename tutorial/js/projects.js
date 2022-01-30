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
const projectApp = Vue.createApp({
    beforeMount(){
        //
        req.open("GET", "./content/projects_data.json", false);
        req.send();
        this.response = req.responseText;
    },
    data(){
        return {
            response: ""
        };
    },
})

projectApp.component('project'), {
    props: ['id', 'name', "url", "content"],
    template: `<li><h4><a v-if="url.length > 0" v-bind:href="url"> <a v-else> {{ name }}</a></h4></li>
    <p v-for="projectText in response.projects.content">`
}

projectApp.mount('#app')