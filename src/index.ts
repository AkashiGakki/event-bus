import Vue from 'vue'
import type { Event } from './types'

const bus = new Vue()

export function $on(event: Event, callback: Function) {
  return bus.$on(event, callback)
}

export function $once(event: Event, callback: Function) {
  return bus.$once(event, callback)
}

export function $off(event?: Event, callback?: Function) {
  return bus.$off(event, callback)
}

export function $emit(event: string, ...args: any[]) {
  return bus.$emit(event, ...args)
}

export default {
  $on,
  $once,
  $off,
  $emit,
  events: (bus as any)._events,
}
