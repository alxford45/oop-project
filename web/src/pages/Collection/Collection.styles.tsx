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
    bigAvatar: {
      margin: 10,
      width: 200,
      height: 200,
      marginLeft: 125,
      marginRight: 100
    },
    text: {
      color: "white",
      component: "h6",
      variant: "h1"
    },
    container: {
      justifyItems: "center",
      alignItems: "center"
    }
  });
