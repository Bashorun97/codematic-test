import app from './app';
import config from './configs/config';

// Server instantiation

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
