const groupBy = (xs, key) => xs.reduce((rv, x) => ({
    ...rv, [x[key]]: [...(rv[x[key]] || []), x]
  }), {})

const join = (list, separator = " ") => list.join(separator)
const sanitizeHTML = (html) => html.toString().replace(/,/gim, " ")
const toAttrs = ([attr, val]) => `${attr.trim()}="${val}"`
const attrs = (attrs) => Object.entries(attrs).map(toAttrs).join("")

const div = (_attrs, ...data) => `<div ${attrs(_attrs).replace(" ", "")}>${join(data)}</div>` 
const form = (...data) => `<form>${join(data)}</form>` 
const h = (index, txt, _attrs) => `<h${index} ${attrs(_attrs)}>${txt}</h${index}>`
const table = (...data) => `<table>${join(data)}</table>` 
const tr = (...data) => `<tr>${join(data)}</tr>` 
const td = (data, _attrs = {}) => `<td ${attrs(_attrs)}>${data}</td>`
const input = (_attrs) => `<input ${attrs(_attrs)} />`
const li = (_attrs = {}, data) => `<li ${attrs(_attrs).replace(" ", "")}>${data}</li>`
const a = (data, href, _attrs = {}) => `<a href="${href.replace(" ", "")}">${data}</a>`