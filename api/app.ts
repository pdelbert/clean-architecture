import express, { Express } from "express";
import usersRoute from "./routes/users";
import builderRoute from "./routes/builder";

const app:Express = express();
const PORT = process.env.PORT || 5000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRoute);
app.use('/builder', builderRoute);

app.listen(PORT, () => {
  console.log(`🧨 Server Listening Port: ${PORT}`);
});
