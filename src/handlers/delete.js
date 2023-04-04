module.exports = (req, res, next) => {
    // Handle delete command here
    const { id } = req.params;
    res.send(`Delete command executed successfully for id ${id}`);
  };
  