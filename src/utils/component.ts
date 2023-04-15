export function componentInstall<T>(key: string, node: T) {
  if (!window['$app'].component(key) && node) {
    window['$app'].component(key, node)
  }
}
