import redisClient from "../../config/db.config.js";
import moment from 'moment';
const logger = async (req, res, next) => {
  try {
    const startHrTime = process.hrtime.bigint();
    res.on("finish", async function () {
      const endHrTime = process.hrtime.bigint();
        // Calculate the time in ms and log it
      const elapsedTimeInMs = Number(endHrTime - startHrTime) / 1000000.0;
      const formData = {
        [`example:${req.originalUrl}:${res.statusCode}:${moment()}`]: JSON.stringify({
          url: req.originalUrl,
          methodType: req.method,
          body: req.body,
          params:req.params,
          statusCode: res.statusCode,
          elapsedTimeInMs:elapsedTimeInMs 
        })
    }
      console.log("api elapsedTimeInMs",elapsedTimeInMs);
     // redisClient.hmset(`logs`, formData);
    });
    

    return next();
  } catch (e) {
    console.log("error in log", e);
    return next();
  }
};
export default logger;
