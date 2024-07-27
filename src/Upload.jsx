import { FileUploader } from "react-drag-drop-files";
import logo from './assets/logo.png'
const fileTypes = ["JPG", "PNG"];


const Upload = ({setImage}) => {

    const handleFileChange = (file) => {
        if (file) {
          const reader = new FileReader();
          
          reader.onload = () => {
            console.log('loading...')
          }
          reader.onloadend = () => {
            
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
    
      const fileUploaderContent = () => {
        return (
            <>
                <div className="uploader-text">
                <div className="title">Upload your image</div>
                <div className="supporting-text">Drag & drop here or <span style={{textDecoration: 'underline'}}>upload file</span></div>
                </div>
                <div className='supported-files'>Only JPG, PNG</div>
            </>
        )
      }

      return (
        <div className="home">
            <div className="hero">
                <div className="logo-and-text">
                    <img src={logo} alt="" />
                    <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            <FileUploader handleChange={handleFileChange} name="file" children={fileUploaderContent()} classes='file-uploader' types={fileTypes} />
            </div>
        </div>
      )

}

export default Upload