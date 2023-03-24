export function setTheme(type: string) {
  const htmlDom = document.documentElement
  const htmlClassNames = htmlDom.classList
  if (type === 'light' && htmlClassNames.contains('dark')) {
    htmlDom.classList.remove('dark')
  }
  if (type === 'dark') {
    htmlDom.classList.add('dark')
  }
}
