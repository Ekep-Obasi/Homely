'use client'

class LOCAL_STORAGE {
  public get(key: string) {
    const item = localStorage.getItem(key)
    return item !== null ? (item.includes('{') ? JSON.parse(item) : item) : null
  }

  public set(key: string, value: any) {
    typeof value === 'string' ? localStorage.setItem(key, value) : localStorage.setItem(key, JSON.stringify(value))
  }

  public remove(key: string) {
    localStorage.removeItem(key)
  }

  public clear() {
    localStorage.clear()
  }
}

const storage = new LOCAL_STORAGE()

export { storage }
