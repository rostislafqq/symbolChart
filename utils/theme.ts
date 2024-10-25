import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const themeMain = createTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: () => ({
          border: `1px solid black`,
          background: "white",
          "&:nth-of-type(odd)": {
            backgroundColor: grey[200],
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.down("sm")]: {
            minWidth: theme.spacing(6),
          },

          padding: "4px",
          borderRight: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          "&:last-child": {
            padding: "4px",
            borderRight: "none",
          },
          textAlign: "center",
        }),
        head: {
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
        },
        stickyHeader: {
          background: "white",
        },
      },
    },
  },
});
