module.exports.getdate = function () {
  const today = new Date();
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return today.toLocaleDateString("en-US", option);
};
module.exports.getday = function () {
  const today = new Date();
  const option = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", option);
};
