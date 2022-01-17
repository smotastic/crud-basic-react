import { Typography, Box, TextField, Button, Alert } from "@mui/material";
import error from "next/error";
import { useState } from "react";
import DataRepository, { MasterData } from "../utils/data/master";
type DetailFormProps = { data: MasterData }
export default function DetailForm({ data }: DetailFormProps) {

    const [name, setName] = useState(data.name);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allBefore = await DataRepository.findAll();
        console.log(allBefore)
        const updated = await DataRepository.update({id: data.id, name});
        console.log(updated);
        const all = await DataRepository.findAll();
        console.log(all);
    }

    return (
        <>
            <Typography component="h1" variant="h5">
                Update {data.id}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    value={name}
                    onChange={handleNameChange}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Update
                </Button>
            </Box>
        </>
    )
}