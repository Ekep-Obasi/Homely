'use client'

class LOCAL_STORAGE {
  static get(key: string) {
    const item = localStorage.getItem(key)
    return item !== null ? (item.includes('{') ? JSON.parse(item) : item) : null
  }

  static set(key: string, value: any) {
    typeof value === 'string' ? localStorage.setItem(key, value) : localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key: string) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}

class SESSION_STORAGE {
  static get(key: string) {
    const item = sessionStorage.getItem(key)
    return item !== null ? JSON.parse(item) : null
  }

  static set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key: string) {
    sessionStorage.removeItem(key)
  }

  static clear() {
    sessionStorage.clear()
  }
}

export { LOCAL_STORAGE, SESSION_STORAGE }
