import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Instructionone from "@/components/Instructionone";
import Instructiontwo from "@/components/Instructiontwo";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import GroupIcon from "@material-ui/icons/Group";
import CommentIcon from "@material-ui/icons/Comment";
import Routes from "../constants/routes";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
    textAlign: "center",
  },
  root2: {
    width: "100%",
  },
  root3: {
    maxWidth: 345,
    marginBottom: 40,
    background: "#27AE60",
  },
  root4: {
    textAlign: "center",
  },
  card: {
    background: "#27AE60",
  },
  paper: {
    background: "#27AE60",
    fontSize: 15,
  },
  tittle: {
    textAlign: "center",
  },
  secontitle: {
    alignItems: "right",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  body: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));

const Home = ({ comments }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.tittle}>
        <Typography variant="h3">
          ¡Bienvenidos a TEACHlearn, la plataforma web que permite solicitar una
          tutoría académica!
        </Typography>
        <br />
      </div>
      <div className={classes.root}>
        <Carousel />
      </div>
      <div className={classes.root2}>
        <h1>
          <CastForEducationIcon style={{ fontSize: 40 }} />
          ¿Cómo funciona para alumnos?
        </h1>
        <Instructionone />
      </div>
      <div className={classes.root2}>
        <h1>
          <CastForEducationIcon style={{ fontSize: 40 }} />
          ¿Cómo funciona para tutores?
        </h1>
        <Instructiontwo />
      </div>
      <div>
        <h1 style={{ fontSize: 25 }}>
          Comentarios de nuestro usuarios{" "}
          <CommentIcon style={{ fontSize: 40 }} />
        </h1>
        <Grid container direction="row" justify="space-between">
          {comments.map((comment) => (
            <Card className={classes.root3}>
              <CardActionArea style={{ background: "#4DCD2F" }}>
                <CardContent className={classes.card}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.comment}
                    style={{ fontSize: 15 }}
                  >
                    {comment.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </div>
      <div className={classes.root4}>
        <Link href={Routes.SCHEDULE} passHref>
          <MuiLink>
            <Button variant="contained" color="secondary">
              Registrar una tutoría
            </Button>
          </MuiLink>
        </Link>
      </div>
      <br />
      <div className={classes.root4}>
        <Link href={Routes.SUBJECTS} passHref>
          <MuiLink>
            <Button variant="contained" color="secondary">
              Registrar una Matería
            </Button>
          </MuiLink>
        </Link>
      </div>
      <br />
      <Grid className={classes.root1}>
        <h1>¿Como surgió TEACHlearn?</h1>
        <GroupIcon style={{ fontSize: 40 }} />
        <Paper className={classes.paper}>
          Somos JEGY una empresa desarrolladora de software que se inició como
          un grupo de amigos estudiantes de la carrera de Tecnología Superior en
          Desarrollo de Software de la Escuela Politécnica Nacional, TEACHlearn
          surgió como proyecto del semestres debido a las complicaciones que
          surgieron debido a la pandemia por el COVID-19 y en vista que los
          estudiantestenían vacíos que deja la educación online se pensó
          desarrollar un sistema que permita a los estudiantes solicitar una
          tutoría personalizada referente a la materia o materias y temas
          específicos donde ellos supongan que necesitan un esfuerzo adicional,
          otra motivación que impulsó a la creación de este proyecto se debe a
          que los estudiantes universitarios no disponen de fuentes de ingreso
          por ello, se busca que los profesores encargados de las tutorías sean
          estudiantes universitarios o también personas con conocimientos
          sólidos sobre las materias en las cuales los estudiantes tienen
          probelas ho en día. TEACHlearn busca consolidarse como una aplicación
          de apoyo para la mayoría de estudiantes.
        </Paper>
        <Paper className={classes.paper}>DESARROLLADORES: </Paper>
        <br />
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h2>Elvis Agila</h2>
              <p>elvis.agila@epn.edu.ec</p>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h2>Jonathan Alquigna</h2>
              <p>jonathan.alquinga@epn.edu.ec</p>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h2>Yomara Díaz</h2>
              <p>yomara.diaz@epn.edu.ec</p>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <h2>Guillermo Rivera</h2>
              <p>guillermo.rivera@epn.edu.ec</p>
            </Paper>
          </Grid>
          <br />
          <br />
        </Grid>
        <br />
        <br />
      </Grid>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`);
  const comms = await res.json();

  const comments = comms.data;

  return {
    props: {
      comments,
    },
  };
}
