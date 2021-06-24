import Vue from 'vue'
import { createRouter } from './router'
import App from './App.vue'

Vue.productionTips = false;

let instance = null
let router = null

function render(props = {}) {
	const { container } = props;
	
	let routebase = window.__POWERED_BY_QIANKUN__ ? "/vue" : "/";
	
	router = createRouter(routebase)

	instance = new Vue({
		router,
		render: (h) => h(App),
	}).$mount(container ? container.querySelector("#app") : "#app")
}

if(!window.__POWERED_BY_QIANKUN__) {
	render();
}

// 导出子应用生命周期
export async function bootstrap() {}

export async function mount(props) {
	render(props);
}

export async function unmount() {
	instance.$destroy();
	instance.$el.innerHtml = "";
	instance = null;
	router = null;
}

export async function update() {}