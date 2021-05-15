import React from "react";
import { CssBaseline, Toolbar, makeStyles } from "@material-ui/core";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import AppRouter from "../routes/AppRouter";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <Sidebar />

            <main className={classes.content}>
                <Toolbar />
                <AppRouter />
            </main>
        </div>
    );
};

export default Dashboard;
