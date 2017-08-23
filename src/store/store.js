const sessionstore = {
  getItem(key){
    return JSON.parse(window.sessionStorage.getItem(key));
     //return JSON.parse(window.localStorage.getItem(key));
  },
  setItem(key, items){
    window.sessionStorage.setItem(key, JSON.stringify(items));
    //window.localStorage.setItem(key, JSON.stringify(items));
  }
}
export default sessionstore;
