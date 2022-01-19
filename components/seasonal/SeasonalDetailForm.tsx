import { Typography, Box, TextField, Button, Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { SeasonalData } from "../../data/seasonal";
type DetailFormProps = { data: SeasonalData, onSubmit: (name: SeasonalData) => void, type: 'Update' | 'Create' }
export default function DetailForm({ data, onSubmit, type }: DetailFormProps) {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name') as string;
        onSubmit({ id: data.id, name: name });
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
                                defaultValue={data.name}
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