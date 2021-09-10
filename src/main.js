import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from "qiankun";
console.log(registerMicroApps);
registerMicroApps([
    {
        name: "reactApp",
        entry: "//localhost:6067",
        container: "#container",
        activeRule: "/app-react",
    }
]);

addGlobalUncaughtErrorHandler((event) => {
    console.error(event);
    const { message: msg } = event;
    if (msg) {
        console.log('11111111')
    }
})
// 启动 qiankun
start();

createApp(App).mount('#app')
