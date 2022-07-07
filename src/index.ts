import Vue from 'vue';
import type { Event } from './types'

const bus = new Vue()

export function $on(event: Event, callback: Function) {
  bus.$on(event, callback)
}

export function $once(event: Event, callback: Function) {
  bus.$once(event, callback)
}

export function $off(event: Event, callback: Function) {
  bus.$off(event, callback)
}

export function $emit(event: string, ...args: any[]) {
  bus.$emit(event, ...args)
}

export default bus
