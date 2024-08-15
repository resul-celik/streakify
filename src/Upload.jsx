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
    document.querySelector('.supported-files').style.display = 'none'
    document.querySelector('.dropzone-text').style.display = 'block'
  }

  const handleDragEnd = (e) => {
    e.preventDefault()
    document.querySelector('.file-uploader').classList.remove('on-drag')
    document.querySelector('.uploader-text').style.display = 'flex'
    document.querySelector('.supported-files').style.display = 'block'
    document.querySelector('.dropzone-text').style.display = 'none'
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
        document.querySelector('.supported-files').style.display = 'block'
        document.querySelector('.dropzone-text').style.display = 'none'
        document.querySelector('.supported-files').innerHTML = 'Unsupported file type. Try PNG or JPG'
        
      }
    }
  }

  const handleManualUpload = () => {
    document.querySelector('.file').click();
  }


  return (
      <>
        <div className="file-uploader" onClick={handleManualUpload} onDragOver={handleDrag} onDragLeave={handleDragEnd} onDrop={handleDrop}>
          <div className="uploader-text" onDrop={(e) => e.preventDefault()}>
            <div className="icon add-image" onDrop={(e) => e.preventDefault()}></div>
            <input type="file" className="file" accept="image/*" onChange={handleFileChange} />
            <div className="title" onDrop={(e) => e.preventDefault()}>Upload your image</div>
            <div className="supporting-text" onDrop={(e) => e.preventDefault()}>Drag & drop here or <span style={{textDecoration: 'underline'}}>upload file</span></div>
          </div>
          <div className='supported-files' onDrop={(e) => e.preventDefault()}>Only JPG or PNG</div>
          <div className="dropzone-text" onDrop={(e) => e.preventDefault()}>Drop Here</div>
        </div>
        <div className="button" onClick={handleManualUpload}>Upload your image</div>
      </>
  )

}

export default Upload