const resizeImage = (maxW, maxH, imgW, imgH) => {
    let ratio = 0;
    let newWidth = 0;
    let newHeight = 0;
    ratio = maxH / imgH;
    newWidth = imgW * ratio;

    if (newWidth > maxW) {
      ratio = maxW / imgW;
      newWidth = maxW;
      newHeight = imgH * ratio;
    } else {
      newHeight = maxH;
    }

    return { width: newWidth, height: newHeight };
  }

  export {resizeImage}