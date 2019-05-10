# vue-throttle

## Project setup

```
$ npm install vue-throttle
```

## Usage
1.Import vue-throttle and install it
```
import Vue from 'vue'
import Throttle from 'vue-throttle'

Vue.use(Throttle)

new Vue({
  // ...
})
```
2.Props

```
* `time` - String | Number

  Required as the time you want set for throttle debounce.

* `event` - String

  If `true`, the modal contents will be pre mounted into the DOM tree. It is useful if you want to pre load the large images on your modal contents before opened.

* `isDebounce` - Boolean

  If `true`, the mode is debounce.  .The default value is 'false' for throttle
```

3.examples

```
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
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
