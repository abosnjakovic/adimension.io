export function noise(): void {
  const c = document.createElement("canvas"),
    ctx = c.getContext("2d"),
    cw = (c.width = 200),
    ch = (c.height = 200);

  let img1 = null;
  let img2 = null;
  let img3 = null;
  ctx.clearRect(0, 0, 200, 200);
  for (let x = 0; x < cw; x++) {
    for (let y = 0; y < ch; y++) {
      ctx.fillStyle = "hsl(0, 0%, " + (100 - Math.random() * 15) + "%)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
  img1 = c.toDataURL();
  ctx.clearRect(0, 0, 200, 200);
  for (let x = 0; x < cw; x++) {
    for (let y = 0; y < ch; y++) {
      ctx.fillStyle = "hsl(0, 0%, " + (100 - Math.random() * 15) + "%)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
  img2 = c.toDataURL();
  ctx.clearRect(0, 0, 200, 200);
  for (let x = 0; x < cw; x++) {
    for (let y = 0; y < ch; y++) {
      ctx.fillStyle = "hsl(0, 0%, " + (100 - Math.random() * 15) + "%)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
  img3 = c.toDataURL();

  document.body.style.backgroundImage = "url(" + img1 + ")";
  document.body.animate(
    {
      backgroundImage: [
        "url(" + img2 + ")",
        "url(" + img3 + ")",
        "url(" + img1 + ")",
      ],
    },
    {
      iterations: Infinity,
      duration: 300,
      easing: "steps(3, jump-none)",
    }
  );
}
