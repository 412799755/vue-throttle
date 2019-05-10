const throttle = function (fn, wait = 50, isDebounce, ctx) {
  let timer
  let lastCall = 0
  return function (...params) {
    if (isDebounce) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(ctx, params)
      }, wait)
    } else {
      const now = new Date().getTime()
      if (now - lastCall < wait) return
      lastCall = now
      fn.apply(ctx, params)
    }
  }
}
let tmp
export default {
  name: 'Throttle',
  abstract: true,
  props: {
    time: Number,
    events: String,
    isDebounce: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.eventKeys = this.events.split(',')
    this.originMap = {}
    this.throttledMap = {}
  },
  render () {
    const vnode = this.$slots.default[0]
    tmp = vnode
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key]
      console.log(vnode,this.originMap)
      if (target === this.originMap[key] && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key]
      } else if (target) {
        this.originMap[key] = target
        this.throttledMap[key] = throttle(target, this.time, this.isDebounce, vnode)
        vnode.data.on[key] = this.throttledMap[key]
      }
    })
    return vnode
  }
}
