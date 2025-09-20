window.onload = () => {
  const who   = ["The dog", "My grandma", "The mailman", "My bird"];
  const action= ["ate", "peed", "crushed", "broke"];
  const what  = ["my homework", "my phone", "the car"];
  const when  = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

  const pick = arr => arr[Math.floor(Math.random() * arr.length)]; // ✅ usa el tamaño real del array

  const el = document.getElementById("info");
  if (el) {
    el.textContent = `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}`;
  } else {
    console.warn('No existe un elemento con id="info"');
  }
};