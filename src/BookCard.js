import {Dialog, Grid }from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import {useState} from 'react';
import './BookCardStyles.css';

export default function BookCard ({image, title, author, confidence, pages, publisher, language, year, size}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid item xl={3} lg={3} sm={3} xs={6}>
                <div className="card-wrapper">
                    <div className="card" onClick={handleClickOpen}>
                        <img src={image} alt="Book Cover"/>
                    </div>
                    <div className="card-container">
                        <div>
                            <Typography component="h6" variant="h6" color="primary" className="header">
                                {title}
                            </Typography>
                            <Typography component="p" variant="body1" className="header">
                                {author}
                            </Typography>
                        </div>
                    </div>
                </div>

                <Container maxWidth="lg">
                    <Dialog
                        maxWidth={false}
                        fullWidth={true}
                        open={open}
                        onClose={handleClose}
                    >
                        <Grid container className="dialog-container">
                            <Grid item lg={4} sm={6} xs={12}>
                                <div>
                                    <img src={image} alt="Avatar" className="avatar-img"/>
                                </div>
                            </Grid>
                            <Grid item lg={8} sm={6} xs={12}>
                                <Typography component="h5" variant="h5" color="primary" className="header">
                                    <b>{title}</b>
                                </Typography>
                                <Typography component="h6" variant="h6" color="textPrimary" className="header">
                                    {author}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Confidence Level: {confidence}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Pages: {pages}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Publisher: {publisher}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Language: {language}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Year: {year}
                                </Typography>
                                <Typography component="p" variant="body4" className="body-text" color="Primary"
                                            style={{lineHeight: '1.5'}}>
                                    Size: {size}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Dialog>
                </Container>
            </Grid>
        </>
    )
}