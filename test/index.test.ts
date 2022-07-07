import { describe, expect, it } from 'vitest'
import bus from '../src'

describe('should', () => {
  it('exported', () => {
    const ret: any = bus.$on('test', () => { })

    const fn = () => { }
    bus.$on('test', fn)
    bus.$off('test', fn)

    expect(ret._events).toMatchInlineSnapshot(
      `
      {
        "test": [
          [Function],
        ],
      }
    `)
  })
})
