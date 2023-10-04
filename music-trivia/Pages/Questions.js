import {Button, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Axios from "../hooks/Axios";

const Questions = () => {
  
  let apiUrl = 'https://rapidapi.com/';

  const { } = Axios({ url: apiUrl })

  const {response, loading} = Axios({url: apiUrl})
  console.log(response);


  return (
    <Box>
      <typography variant="h4">Question1</typography>
      <typography mt={3}>This is the question?</typography>
      <Box mt={2}>
        <button variant="contained"> Answer 1</button>
      </Box>
      <Box>
        <button variant="contained"> Answer 2</button>
      </Box>
      <Box variant="container">Score 2/6
    </Box>
  );
};


[
  {
    id: 1,
    question: "Who is featured in this song?",
    audioClip: "audio1.mp3", // Replace with the actual audio file URL
    videoClip: "video1.mp4", // Replace with the actual video file URL
    answers: [
      {
        id: "A",
        text: "Artist A",
        isCorrect: false,
      },
      {
        id: "B",
        text: "Artist B",
        isCorrect: true,
      },
      {
        id: "C",
        text: "Artist C",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "What genre of music is this?",
    audioClip: "audio2.mp3",
    videoClip: "video2.mp4",
    answers: [
      {
        id: "A",
        text: "Rock",
        isCorrect: false,
      },
      {
        id: "B",
        text: "Pop",
        isCorrect: false,
      },
      {
        id: "C",
        text: "Hip-Hop",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: "Who is the artist performing this song?",
    audioClip: "audio3.mp3",
    videoClip: "video3.mp4",
    answers: [
      {
        id: "A",
        text: "Artist X",
        isCorrect: false,
      },
      {
        id: "B",
        text: "Artist Y",
        isCorrect: true,
      },
      {
        id: "C",
        text: "Artist Z",
        isCorrect: false,
      },
    ],
  },
  // Add more questions as needed
];

export default Questions