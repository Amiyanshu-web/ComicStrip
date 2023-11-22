import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import './Characters.scss';
import CharacterCard from './CharacterCard';

export default function Characters() {
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


    handleModalClose();
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
      <div className="characters">
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
          {/* <h2 id="modal-title">Enter Image URL for {currentFrame}</h2> */}
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
            <button variant="contained" className= "reset" onClick={handleModalClose} sx={{ mr: 1 }}>
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
