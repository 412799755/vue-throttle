# vue-throttle

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Debounce组件会接受time和events（用逗号分隔）的两个参数。

使用示例：
<div id="app">
    <Throttle :time="1000" events="click">
        <button @click="onClick($event, 1)">click+1 {{val}}</button>
    </Throttle>
    <Throttle :time="1000" events="click" :isDebounce="true">
        <button @click="onAdd">click+3 {{val}}</button>
    </Throttle>
    <Throttle :time="3300" events="mouseleave" :isDebounce="true">
        <button @mouseleave.prevent="onAdd">click+3 {{val}}</button>
    </Throttle>
</div>
