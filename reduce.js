'use strict'

const { pick } = require('underscore')


const c = {
  log: 'this',
  error: 'that',
  warn: 'those',
  info: 'them'
}

// gotta be a better way...
const cm = ['log', 'info', 'warn', 'error']
const pc = pick(c, cm)
cm.reduce((n, v) => { n[v] = () => {}; return n }, c)
Object.assign(c, pc)

if(true) {
  console.log('nothing')
}