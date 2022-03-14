import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Player } from 'video-react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Typography, InputLabel, FormControl, NativeSelect, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import "../node_modules/video-react/dist/video-react.css";
import VideoLibrary from '@mui/icons-material/VideoLibrary';

import video1 from "./videos/12.mp4";
import video2 from "./videos/13.mp4";
import video3 from "./videos/14.mp4";
import video4 from "./videos/15.mp4";
import video5 from "./videos/16.mp4";
import videoObrigado from "./videos/obrigado.mp4";


import './App.css';

function App() {
  return (

    <MuiThemeProvider>
            <>
              <CssBaseline />
               
                  <AppBar position="relative" title="Enter User Details" >
                    <Toolbar>
                    <VideoLibrary />
                      <Typography variant="h5"> Repositório de vídeos do CI </Typography>
                    </Toolbar>
                  </AppBar>

                  <main>
                      <div>
                         
                          <Container maxWidth="sm" style={{ marginTop: '50px'}} >

                          <Typography style={{ marginTop: '50px'}} variant="body1">Este vídeo é quando falta preencher o campo local de aula</Typography> 
                          <Player
                            playsInline
                            src={video1}
                            videoId="video1"
                            />

                          <Typography style={{ marginTop: '50px'}} variant="body1">Este vídeo é quando falta preencher o campo assunto da aula</Typography> 
                          <Player
                            playsInline
                            src={video2}
                            videoId="video2"
                            />

                          <Typography style={{ marginTop: '50px'}} variant="body1">Este vídeo é quando falta preencher a data de início da aula</Typography> 
                          <Player
                            playsInline
                            src={video3}
                            videoId="video3"
                            />

                          <Typography style={{ marginTop: '50px'}} variant="body1">Este vídeo é quando falta preencher a data final da aula</Typography> 
                          <Player
                            playsInline
                            src={video4}
                            videoId="video4"
                            />

                           
                          <Typography style={{ marginTop: '50px'}} variant="body1">Este vídeo é quando falta escolher o intérprete</Typography> 
                          <Player
                            playsInline
                            src={video5}
                            videoId="video5"
                            /> 

                                                       
                          <Typography  style={{ marginTop: '50px'}} variant="body1">Este é o vídeo de agradecimento</Typography> 
                          <Player
                            playsInline
                            src={videoObrigado}
                            videoId="obrigado"
                            /> 

                            <br></br>
                            
                    
                    </Container>
                    </div>
                    </main>
                    
                            </>
            </MuiThemeProvider>
  );
}

export default App;
