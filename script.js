function verificar() {
    var codigoE = document.getElementById("kap");
    var codigo = new String(codigoE.value);
    const bah = "i'm not a robot pls let me in";

    if (codigo == bah){
        window.location.href = "principio.html";
    }
    else {window.location.href = "https://www.youtube.com/watch?v=LDDWf1uoNck&ab_channel=ItsKevin";}
}

function tiny(){var a="-webkit-",b='transform:scale(5%);',c='transition:2s;';document.head.innerHTML+='<style>body{'+a+b+a+c+b+c}
function roll(){var a="-webkit-",b='transform:rotate(1turn);',c='transition:600s;';document.head.innerHTML+='<style>body{'+a+b+a+c+b+c}

document.addEventListener('keydown', function(event) {
    var delta = 1;
  if (event.key === 'ArrowLeft') {
window.scrollBy(-delta, 0);
event.preventDefault();
} else if (event.key === 'ArrowUp') {
window.scrollBy(0, -delta);
event.preventDefault();
} else if (event.key === 'ArrowRight') {
window.scrollBy(delta, 0);
  event.preventDefault();
} else if (event.key === 'ArrowDown') {
window.scrollBy(0, delta);
  event.preventDefault();}});
