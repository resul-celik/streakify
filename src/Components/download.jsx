import p5 from 'p5';
import { streakify } from './Streakify';
import { resizeImage } from './resizeImage';

const download = (image, downloadRef, setDownloading, direction, position,option) => {

  setDownloading(true)

  let resolution = null

  if (option == 1) {
    resolution = 1080
  } else if (option == 2) {
    resolution = 720
  }

  // Ensure the previous p5 instance is removed
  if (downloadRef.current) {
    downloadRef.current.remove();  // Removes the existing p5 canvas
    downloadRef.current = null;    // Clears the reference to the removed instance
  }

  const updatePosition = (originalSize,resizedSize,position) => {
    return (originalSize / 100) * ((position * 100) / resizedSize)
  }

  let os = {
    width: image.originalSize.width,
    height: image.originalSize.height
  }

  if (resolution) {
    os = resizeImage(resolution,image.originalSize.width,image.originalSize.height)
  }

  let rs = {
    width: image.resizedSize.width,
    height: image.resizedSize.height
  }

  // Prepare and generate the full-size image
    const prepare = () => {
    return new Promise((resolve, reject) => {
      downloadRef.current = new p5((p) => {
        let img;

        p.preload = () => {
          img = p.loadImage(image.image);
        };

        p.setup = () => {
          p.pixelDensity(1);
          p.createCanvas(os.width, os.height);
          p.image(img, 0, 0, os.width, os.height);
          
          streakify(
            p,
            img,
            updatePosition(os.width, rs.width, position.x),
            updatePosition(os.height, rs.height, position.y),
            os,
            direction
          ) 
          
          resolve(downloadRef.current);  

          
        };
      }, document.createElement('div')); // Attach to a temporary div
    });
  };

  // Process and download the image
  prepare().then((fullRes) => {
    const d = new Date();
    let time = d.getTime();

    const name = `streakify-${time}`;
    fullRes.saveCanvas(fullRes.canvas, name, 'png');

    fullRes.remove();  // Remove the p5 instance after saving the image
    downloadRef.current = null; // Clear the reference to the removed instance
    setDownloading(false)
  }).catch((er) => {
    console.log(er);
  }); 
};

export {download}