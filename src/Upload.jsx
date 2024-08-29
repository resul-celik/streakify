import Button from "./Components/Buttons";

const Upload = ({setImage}) => {

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  const handleDrag = (e) => {
    e.preventDefault()
    document.querySelector('.file-uploader').classList.remove('on-error')
    document.querySelector('.file-uploader').classList.add('on-drag')
    document.querySelector('.uploader-text').style.display = 'none'
    document.querySelector('.supporting-text').style.display = 'none'
  }

  const handleDragEnd = (e) => {
    e.preventDefault()
    document.querySelector('.file-uploader').classList.remove('on-drag')
    document.querySelector('.uploader-text').style.display = 'flex'
    document.querySelector('.supporting-text').style.display = 'block'
  }

  /* document.onpaste = (e) => {
    const dT = e.clipboardData || window.clipboardData;
    const file = dT.files[0];
    if(file) {
      const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
  } */

  const handleDrop = (e) => {
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    
    if (file) {
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          
          setImage(reader.result);
          
        };
        reader.readAsDataURL(file);
      } else {
        document.querySelector('.file-uploader').classList.remove('on-drag')
        document.querySelector('.file-uploader').classList.add('on-error')
        document.querySelector('.uploader-text').style.display = 'flex'
        document.querySelector('.supporting-text').style.display = 'block'
        document.querySelector('.upload-text').innerHTML = 'Unsupported file type.'
        document.querySelector('.supporting-text').innerHTML = 'Try PNG or JPG'
        
      }
    }
  }

  const handleManualUpload = () => {
    document.querySelector('.file').click();
  }


  return (
      <>
        <div className="file-uploader" onClick={handleManualUpload} onDragOver={handleDrag} onDragLeave={handleDragEnd} onDrop={handleDrop}>
          <div className="icon add-image" onDrop={(e) => e.preventDefault()}></div>
          <div className="uploader-text" onDrop={(e) => e.preventDefault()}>
            <input type="file" className="file" accept="image/*" onChange={handleFileChange} />
            <div className="upload-text" onDrop={(e) => e.preventDefault()}>Try it yourself</div>
            <div className="supporting-text" onDrop={(e) => e.preventDefault()}>Drag & drop here or <span style={{textDecoration: 'underline'}}>upload file</span></div>
          </div>
        </div>
        <Button 
          text='Upload your image'
          size='XL'
          hierarchy='PRI'
          onClick={handleManualUpload}
          className='mobile-only'
        />
      </>
  )

}

export default Upload