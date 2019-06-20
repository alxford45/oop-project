import { Theme, createStyles } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background:
        "linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    },
    button: {
      marginTop: 100,
      marginLeft: 170
    },
    list: {
      background:
        "linear-gradient(45deg, #0d47a1 30%, #1e88e5 70%, #42a5f5 90%)"
    },
    text: {
      color: "white",
      marginLeft: 200,
      marginRight: 200
    },
    emptyPaper: {
      padding: "10px",
      backgroundColor: theme.palette.primary.main
    }
  });
