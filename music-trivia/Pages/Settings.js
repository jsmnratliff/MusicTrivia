import {Button} from "@mui/material";
import {Box} from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../src/components/TextFieldComp";
import Axios from "../hooks/Axios";

const Settings = () => {
    const {response, error, loading} = Axios ({ url: "/api_category.php"});
    
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
         <Typography variant="no" mt={20} color="red">
                Something Went Wrong
         </Typography>
        );
    };

    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"},
    ]

    const typeOptions = [
        {id: "multiple" name: "Multiple Choice"},
        {id: "boolean" name: "True/False"},
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={response,trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3} width="100%"></Box>
              <Button fullWidth variant="contained" type="submit">
                get Started
              </Button>
            </form>
    );
};

export default Settings