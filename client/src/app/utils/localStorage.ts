class LocalStorage {
  getToken() {
    return localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }
}

export default new LocalStorage();
