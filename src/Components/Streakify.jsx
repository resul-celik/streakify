const streakify = (p, img, mouseX, mouseY, size, direction) => {
      
    p.image(img, 0, 0, size.width, size.height);

    if (direction == 'v' || direction == 'u' || direction == 'd') {
      for (let i = 0; i < size.width; i++) {
        // Get the color of the pixel at (mouseX, i) on the resized image
        const c = img.get(Math.floor(i * (img.width / size.width)), Math.floor(mouseY * (img.height / size.height)));
      
        p.fill(c);
        p.noStroke();

        if (direction == 'u') {
          p.rect(i, 0, 1, mouseY);
        } else if (direction == 'd') {
          p.rect(i, mouseY, 1, img.height - mouseY);
        } else {
          p.rect(i, 0, 1, size.height);
        }
      }
    } else {
      for (let i = 0; i < size.height; i++) {
        // Get the color of the pixel at (mouseX, i) on the resized image
        const c = img.get(Math.floor(mouseX * (img.width / size.width)), Math.floor(i * (img.height / size.height)));
      
        p.fill(c);
        p.noStroke();

        if (direction == 'l') {
          p.rect(0, i, mouseX, 1);
        } else if (direction == 'r') {
          p.rect(mouseX, i, img.width - mouseX, 1);
        } else {
          p.rect(0, i, size.width, 1);
        }
      }
      
    }

    //p.filter(p.BLUR,1)
  
    p.redraw(); 
  };

  export {streakify}
