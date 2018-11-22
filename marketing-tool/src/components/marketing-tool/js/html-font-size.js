function htmlSize() {
  var w=document.documentElement.clientWidth;
  if(w>1920){
    document.getElementsByTagName('html')[0].style.fontSize="12px";
  }
}
export default htmlSize();

