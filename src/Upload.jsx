import { FileUploader } from "react-drag-drop-files";
import logo from './assets/logo.png'
import { useRef } from "react";


const Upload = ({setImage,setLoading}) => {


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
        console.log('Unsupported file type. Try PNG or JPG')
      }
    }
  }

  const handleManualUpload = () => {
    document.querySelector('.file').click();
  }

  return (
    <div className="home">
        <div className="hero">
            <div className="logo-and-text">
                <img src={logo} alt="" />
                <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
          <div className="file-uploader" onClick={handleManualUpload} onDragOver={handleDrag} onDragLeave={handleDragEnd} onDrop={handleDrop}>
            <div className="uploader-text">
              <input type="file" className="file" accept="image/*" onChange={handleFileChange} />
              <div className="title">Upload your image</div>
              <div className="supporting-text">Drag & drop here or <span style={{textDecoration: 'underline'}}>upload file</span></div>
            </div>
            <div className='supported-files'>Only JPG, PNG</div>
            <div className="dropzone-text">Drop Here</div>
          </div>
        </div>
    </div>
  )

}

export default Upload