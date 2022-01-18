import { Typography, Box, TextField, Button, Alert, Grid, Container, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { MasterData } from "../data/master";
type DetailFormProps = { data: MasterData, onSubmit: (name: MasterData) => void, type: 'Update' | 'Create' }
export default function DetailForm({ data, onSubmit, type }: DetailFormProps) {
    const router = useRouter();

    const [name, setName] = useState(data.name);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ id: data.id, name });
    }

    return (
        <>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h5">
                    {type} {data.id}
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
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
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            color="secondary"
                            type="button"
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                            onClick={() => router.back()}
                        >
                            {'Back'}
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {type}
                        </Button>

                    </Box>
                </Box>
            </Paper>

        </>
    )
}