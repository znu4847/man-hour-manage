export default class TimeTableRow {
  /**
   * Constructor
   * @param {Object} dateData a data that can be converted to Date
   */
  constructor(dateData) {
    this.date = new Date(dateData);
  }

  /**
   * get timeStamp
   * @param {Number} minute
   */
  getTimeStamp(minute) {
    let hmMap = this.getHmMap(minute);
    if (hmMap === null) return "";
    return (
      hmMap.hour.toString().padStart(2, 0) +
      ":" +
      hmMap.min.toString().padStart(2, 0)
    );
  }

  /**
   * get hour-min map from minute
   * @param {Number} minute
   */
  getHmMap(minute) {
    if (minute === null) return null;
    let hour = Math.floor(minute / 60);
    let min = minute - hour * 60;
    return { hour: hour, min: min };
  }
}
