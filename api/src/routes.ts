import express from 'express';
import TimeZoneController from './logic/controller';

const router = express.Router();
const tz = new TimeZoneController();

router.get(
  '/',
  async (req, res, next) => {
    const { timezone } = req.query as Record<
      string,
      string & string[] & number
    >;
    try {
      const timeAsString: string = await tz.displayTime(timezone);
      return res.json(timeAsString);
    } catch (error) {
      next (error);
    }
  }
);

export default router;
