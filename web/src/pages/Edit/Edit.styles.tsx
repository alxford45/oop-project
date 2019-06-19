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
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    list: {
      background:
        "linear-gradient(45deg, #0d47a1 30%, #1e88e5 70%, #42a5f5 90%)"
    },
    listText: {
      color: "theme.palette.common.white"
    }
  });
