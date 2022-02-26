import * as React from "react";
import { styled } from "@mui/material/styles";
import "./Card.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ el }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "transparent" }}>
        <CardHeader
          style={{ backgroundColor: "transparent" }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={el.skill.name}
          subheader={el.skill.date}
        />
        <CardMedia
          component="img"
          className="image"
          image={el.skill.source}
          alt="skill logo"
          /*style={{height:170}} */
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {el.skill.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="success" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
