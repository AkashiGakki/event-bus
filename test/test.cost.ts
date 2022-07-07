import bus from '../src'

console.time('test on')
for (let i = 0; i < 1000; i++)
  bus.$on(`${i}`, () => { })
console.timeEnd('test on')

console.time('test emit')
for (let i = 0; i < 1000; i++)
  bus.$emit(`${i}`)
console.timeEnd('test emit')

// bus.$on('test', (ev: any) => console.log('ev:', ev))
// bus.$emit('test', { akashi: 'asuak' })
