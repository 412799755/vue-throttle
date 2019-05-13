const throttle = function (fn, wait = 50, isDebounce, ctx, immediate) {
  let timer
  let lastCall = 0
  return function (...params) {
    if (isDebounce) {
      if (timer) clearTimeout(timer)
      if (immediate) {
        let doNow = !timer
        timer = setTimeout(function () {
          timer = null
        }, wait)
        if (doNow) {
          fn.apply(ctx, params)
        }
      } else {
        timer = setTimeout(() => {
          fn.apply(ctx, params)
        }, wait)
      }
    } else {
      const now = new Date().getTime()
      if (now - lastCall < wait) return
      lastCall = now
      fn.apply(ctx, params)
    }
  }
}
export default {
  name: 'Throttle',
  abstract: true,
  props: {
    time: Number,
    events: String,
    isDebounce: {
      type: Boolean,
      default: false
    },
    isImmediate: {
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
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key]
      if (target === this.originMap[key] && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key]
      } else if (target) {
        this.originMap[key] = target
        this.throttledMap[key] = throttle(target, this.time, this.isDebounce, vnode, this.isImmediate)
        vnode.data.on[key] = this.throttledMap[key]
      }
    })
    return vnode
  }
}
