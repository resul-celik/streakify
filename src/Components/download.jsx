import p5 from 'p5';
import { streakify } from './Streakify';

const download = (image, downloadRef, setDownloading, direction,position) => {

  setDownloading(true)

    // Ensure the previous p5 instance is removed
    if (downloadRef.current) {
      downloadRef.current.remove();  // Removes the existing p5 canvas
      downloadRef.current = null;    // Clears the reference to the removed instance
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
            p.createCanvas(image.originalSize.width, image.originalSize.height);
            p.image(img, 0, 0, image.originalSize.width, image.originalSize.height);

            streakify(
              p,
              img,
              (image.originalSize.width / 100) * ((position.x * 100) / image.resizedSize.width),
              (image.originalSize.height / 100) * ((position.y * 100) / image.resizedSize.height),
              image.originalSize,
              direction
            )
            
            resolve(downloadRef.current);  

            
          };
        }, document.createElement('div')); // Attach to a temporary div
      });
    };
  
    // Process and download the image
    prepare().then((fullRes) => {
      const randomName = `streakify-${direction}-${Math.floor(Math.random() * 9999)}`;
      fullRes.saveCanvas(fullRes.canvas, randomName, 'png');
      fullRes.remove();  // Remove the p5 instance after saving the image
      downloadRef.current = null; // Clear the reference to the removed instance
      setDownloading(false)
    }).catch((er) => {
      console.log(er);
    });
  };

  export {download}