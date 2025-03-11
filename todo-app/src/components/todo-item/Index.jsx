import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Index = ({ todo, fetchDetails }) => {
  return (
    <Card
      key={todo?.id}
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"textSecondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetails(todo?.id)}
          sx={{
            backgroundColor: "#000",
            color: "white",
            opacity: "0.75",
            "&:hover": {
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Index;
