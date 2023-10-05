const Log = (message, ...args) => {
  console.debug(message, ...args);
};

const AnalyticsLog = (message, ...args) => {
  Log(message, args);
};

Log.Analytics = AnalyticsLog;
export { Log };
