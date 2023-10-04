import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Questions from '../Pages/Questions';
import FinalScreen from '../Pages/FinalScreen';
import Settings from '../Pages/Settings.js';
import {container} from "@mui/material";

function App() {
    return (
        <Router>
            <Container maxWidth="sm">
                <Box textAlign="center" mt={5}>
                <Switch>
                    <Route path="/" exact>
                       <typography variant="h2" fontWeight="bold"> Quiz
                       </typography>
                        <Settings />
                    </Route>
                    <Route path="questions /">
                         <Questions />
                    </Route>
                    <Route path="/score">
                         <FinalScreen /> 
                    </Route>  
                </Switch>
                </Box>
            </Container>
         </Router>
    );
}
export default App;