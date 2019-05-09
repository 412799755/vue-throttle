// 导入组件，组件必须声明 name
import throttle from './src/throttle'

// 为组件提供 install 安装方法，供按需引入
throttle.install = function (Vue) {
  Vue.component(throttle.name, throttle)
}

// 默认导出组件
export default throttle
