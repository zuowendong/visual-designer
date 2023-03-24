const prefix = 'designer'

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(`${prefix}_${key}`, value)
}

export function getLocalStorage(key: string) {
  return localStorage.getItem(`${prefix}_${key}`)
}
