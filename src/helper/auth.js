function auth() {
  var path = window.location.pathname;
  var acc = sessionStorage.getItem('acc');
  console.log(acc);
  if (!acc) {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } 
     if(window.location.pathname === '/register'){
        window.location.href = '/register';
     }
  }
}
export default auth;
