import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  useMediaQuery,
  Paper,
} from "@material-ui/core";
import { render } from "react-dom";

const headerStyles = makeStyles((theme) => ({
    headerContainer: {
        padding: 10,
        paddingLeft: 20, 
        spacing: 2,
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
}))

export default function Header() {
    const classes = headerStyles();
    return (
        <Grid container
        className = "classes.headerContainer"
        >
            <Grid item
            className = "classes.headerName">
                Xin Wang
            </Grid>
        </Grid>
    )
}
