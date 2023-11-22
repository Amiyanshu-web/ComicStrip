import React, { useState } from 'react';
import { Modal, TextField, Box } from '@mui/material';
import { Bars } from 'react-loader-spinner'
import html2canvas from 'html2canvas';
import './Characters.scss';
import CharacterCard from './CharacterCard';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import cloudinary from 'cloudinary';
const CLOUDINARY_FOLDER_NAME = 'Dashtoon'
const CLOUDINARY_CLOUD_NAME = 'dbvg8hyac'

export default function Characters() {
  const printRef = React.useRef();
  const inputRef = React.useRef(null);
  const [selectImage, setSelectImage] = React.useState("");

  // Frame state declaration
  const [frameOne, setFrameOne] = useState('');
  const [frameTwo, setFrameTwo] = useState('');
  const [frameThree, setFrameThree] = useState('');
  const [frameFour, setFrameFour] = useState('');
  const [frameFive, setFrameFive] = useState('');
  const [frameSix, setFrameSix] = useState('');
  const [frameSeven, setFrameSeven] = useState('');
  const [frameEight, setFrameEight] = useState('');
  const [frameNine, setFrameNine] = useState('');
  const [frameTen, setFrameTen] = useState('');


  const [showModal, setShowModal] = useState(false);
  const [currentFrame, setCurrentFrame] = useState('');
  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleModalShow = (frame) => {
    setShowModal(true);
    setCurrentFrame(frame);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Make an API call to the Image Generation API
      const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
      const apiKey = "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "image/png",
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: textInput }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        // // Update the state with the generated image URL
        // setGeneratedImageUrl(imageUrl);
        // console.log(response.url);
        console.log(imageUrl);

        switch (currentFrame) {
          case 'frameOne':
            setFrameOne(imageUrl);
            break;
          case 'frameTwo':
            setFrameTwo(imageUrl);
            break;
          case 'frameThree':
            setFrameThree(imageUrl);
            break;
          case 'frameFour':
            setFrameFour(imageUrl);
            break;
          case 'frameFive':
            setFrameFive(imageUrl);
            break;
          case 'frameSix':
            setFrameSix(imageUrl);
            break;
          case 'frameSeven':
            setFrameSeven(imageUrl);
            break;
          case 'frameEight':
            setFrameEight(imageUrl);
            break;
          case 'frameNine':
            setFrameNine(imageUrl);
            break;
          case 'frameTen':
            setFrameTen(imageUrl);
            break;
          default:
            break;
        }


        // Close the modal after successful API response
        handleModalClose();
      } else {
        // Handle error response
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // 

    setLoading(false);
    handleModalClose();
  };

  const handleReset = () => {
    setFrameOne("");
    setFrameTwo("");
    setFrameThree("");
    setFrameFour("");
    setFrameFive("");
    setFrameSix("");
    setFrameSeven("");
    setFrameEight("");
    setFrameNine("");
    setFrameTen("");
    setSelectImage("");
  }

  const handleDownloadImage = async (e) => {
    e.preventDefault();
    // TODO: logic
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
    // handleImage(data);
  };

  const handleImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const element = printRef.current;
    const canvas = await html2canvas(element);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg');
    }).then((imageBlob) => {
      const formData = new FormData();
      formData.append('file', imageBlob);
      formData.append('upload_preset', 'Missing');
      formData.append('folder', CLOUDINARY_FOLDER_NAME);

      fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.secure_url);
          setSelectImage(data.secure_url);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error uploading image to Cloudinary:', error);
        });
    });

  };

  const handleCopyClick = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      // Optionally, you can provide feedback to the user
      alert('Copied to clipboard!');
    }
  };

  const characterFrames = [
    { frame: 'frameOne', imageUrl: frameOne },
    { frame: 'frameTwo', imageUrl: frameTwo },
    { frame: 'frameThree', imageUrl: frameThree },
    { frame: 'frameFour', imageUrl: frameFour },
    { frame: 'frameFive', imageUrl: frameFive },
    { frame: 'frameSix', imageUrl: frameSix },
    { frame: 'frameSeven', imageUrl: frameSeven },
    { frame: 'frameEight', imageUrl: frameEight },
    { frame: 'frameNine', imageUrl: frameNine },
    { frame: 'frameTen', imageUrl: frameTen },
  ];

  return (
    <>
      {
        loading &&
        <Bars
          height="80"
          width="80"
          // color="rgb(82, 205, 240)"
          color= "red"
          ariaLabel="bars-loading"
          wrapperStyle={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "10000" }}
          wrapperClass=""
          visible={true}
        />
      }
      <form className="search"
      // onSubmit={handleDownloadImage}
      >
        <div style={{ display: "flex" }}>

          <input
            type="text"
            placeholder="Click to copy link"
            value={selectImage}
            readOnly
            ref={inputRef}
            onClick={handleCopyClick}
          />
          {/* <ContentCopyIcon/> */}
          {/* <button onClick={handleCopyClick} style={{height:"10px"}}>📋</button> */}
        </div>
        <div className="buttons">
          <button onClick={handleDownloadImage}>Download </button>
          <button onClick={handleImage}>Generate Link</button>
          <button type="reset" className="reset"
            onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>


      <div className="characters" ref={printRef}>
        {characterFrames.map(({ frame, imageUrl }) => (
          <CharacterCard
            key={frame}
            frame={frame}
            imageUrl={imageUrl}
            onClick={() => handleModalShow(frame)}
          />
        ))}
      </div>

      {/* MODAL MATERIAL UI */}
      {/* Modal */}
      <Modal
        open={showModal}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        centered
      >
        <Box sx={{ width: 400, bgcolor: 'background.paper', p: 3 }}>
          <TextField
            id="outlined-basic"
            label="Describe what you want to see"
            variant="filled"
            value={textInput}
            onChange={handleTextInputChange}
            fullWidth
            autoFocus
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <button variant="contained" className="reset" onClick={handleModalClose} sx={{ mr: 1 }}>
              Close
            </button>
            &nbsp;
            <button variant="contained" onClick={handleSubmit} color="primary">
              Generate
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
