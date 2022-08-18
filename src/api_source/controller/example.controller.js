const controller={};


controller.getExample = async (req, res, next) => {
    try {
      res.status(200).send({"message":"success"});
    } catch (error) {
      next(error);
    }
  };

export default controller;  