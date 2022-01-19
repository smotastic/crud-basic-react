import { Typography, Box, TextField, Button, Alert, Grid, Container, Paper, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { HouseplantData } from "../../data/houseplants";
import { SUNLIGHT, WATER_REQUIREMENT } from "../../utils/houseplant.select";
import BasicDatePicker from "./DatePicker";
type DetailFormProps = { data: HouseplantData, onSubmit: (name: HouseplantData) => void, type: 'Update' | 'Create' }
export default function DetailForm({ data, onSubmit, type }: DetailFormProps) {
    const router = useRouter();

    const [defaultValues, _] = useState({ ...data });
    const [lastWatered, setLastWatered] = useState<Date>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name') as string;
        const description = form.get('description') as string;
        const waterRequirement = form.get('waterRequirement') as string;
        const sunlight = form.get('sunlight') as string;
        onSubmit({ id: data.id, name, description, waterRequirement, sunlight, lastWatered });
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
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                maxRows={4}
                                id="description"
                                label="Description"
                                name="description"
                                defaultValue={data.description}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="waterRequirementLabel">Water Requirement</InputLabel>
                                <Select
                                    labelId="waterRequirementLabel"
                                    id="waterRequirement"
                                    label="Water Requirement"
                                    name="waterRequirement"
                                    defaultValue={defaultValues.waterRequirement}
                                >
                                    {WATER_REQUIREMENT.map(req => <MenuItem key={req} value={req}>{req}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="sunlightLabel">Sunlight</InputLabel>
                                <Select
                                    labelId="sunlightLabel"
                                    id="sunlight"
                                    label="Sunlight"
                                    name="sunlight"
                                    defaultValue={defaultValues.sunlight}
                                >
                                    {SUNLIGHT.map(req => <MenuItem key={req} value={req}>{req}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <BasicDatePicker onChange={setLastWatered} initialValue={defaultValues.lastWatered}/>
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