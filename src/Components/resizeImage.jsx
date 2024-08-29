function fitToScreen(maxW, maxH, width, height) {
    
  let ratio = 0;
  let newWidth = 0;
  let newHeight = 0;
  ratio = maxH / height;
  newWidth = width * ratio;

  if (newWidth > maxW) {
    ratio = maxW / width;
    newWidth = maxW;
    newHeight = height * ratio;
  } else {
    newHeight = maxH;
  }

  return { width: newWidth, height: newHeight };
}

function resizeImage(resolution, width, height) {
    
  let ratio = 0;
  let newWidth = 0;
  let newHeight = 0;

  if (width > height || width == height) {
    ratio = resolution / height;
    newWidth = width * ratio;
    newHeight = resolution;
  } else {
    ratio = resolution / width;
    newWidth = resolution;
    newHeight = height * ratio;
  }

  return { width: newWidth, height: newHeight };
}

  export {fitToScreen,resizeImage}