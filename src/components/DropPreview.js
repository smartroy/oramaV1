import { autocompleteClasses } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadService from './services/UploadService'

const thumbsContainer = {
    display: 'flex',

    flexWrap: 'wrap',
    marginTop: 16,
    justfyContent: 'center'
};

const thumb = {
    display: 'flex',
    borderRadius: 2,
    margin: 'auto',
    maxWidth: '400px',
    padding: 4,
    boxSizing: 'border-box',
    margin: 'auto'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};
const oramaStyles = [
    { name: "vanGogh", text: "van Gogh" },
    { name: "vanGogh2", text: "van Gogh2" },
    { name: "vanGogh3", text: "van Gogh3" }


]

function DropPreview() {
    const [curFile, setCurFile] = useState([])
    const [hasStylePreview, setHasStylePreview] = useState(false)
    const [selectedStyle, setSelectedStyle] = useState([]);
    const [returnedPic, setReturnedPic] = useState();
    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setCurFile(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));

        }
    });
    const styleOptions = oramaStyles.map(style => (
        <label>
            <input type="radio" value={style.name} name="style"
                onChange={() => (
                    changeSelectedStyle(style.name)

                )}
            />
            {style.text} &nbsp;
        </label>
    ));

    const changeSelectedStyle = (style) => {
        setSelectedStyle(style);
        console.log("choose style " + style)
    }

    const thumbs = curFile.map(file => (
        <div key={file.name} style={thumb}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} />
            </div>
        </div>

    ));
    useEffect(() => {
        curFile.forEach(file => URL.revokeObjectURL(file.preview));
    })


    const uploadPicture = () => {
        let fileToUpload = curFile[0];
        const targetStyle = selectedStyle;
        UploadService.upload(fileToUpload, targetStyle)
            .then((response) => {
                console.log(response);
                setHasStylePreview(true);
                setReturnedPic(response.data.src);

            });
    };

    return (

        < div className="drop-preview-upload-box" >
            <section className="container">
                {curFile.length == 0 &&
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />

                        <p className="title" style={{ font: "Roboto" }}>Drag 'n' drop a picture here, or click to select picture</p>

                    </div>
                }
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
                {curFile.length > 0 && !hasStylePreview &&

                    <div>
                        <p>Please Choose a Style You like:</p>
                        {styleOptions}
                        <br></br>
                        <button
                            className="btn btn-success"
                            onClick={() => uploadPicture()}
                        >
                            Upload
                    </button>
                    </div>
                }
                {hasStylePreview &&
                    <div>
                        <div style={thumb}>
                            <div style={thumbInner}>
                                <img src={returnedPic} style={img} />
                            </div>
                        </div>
                    </div>

                }





            </section>
        </div >
    )
}

export default DropPreview
