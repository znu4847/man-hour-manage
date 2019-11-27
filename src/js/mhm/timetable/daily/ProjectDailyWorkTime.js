import TimeTableRow from "@/js/mhm/timetable/TimeTableRow.js";

export default class ProjectDailyWorkTime extends TimeTableRow {
  constructor(workData) {
    super(workData.date);
    this.workData = workData;
  }

  get work1Str() {
    return this.getTimeStamp(this.workData.work1);
  }

  get work2Str() {
    return this.getTimeStamp(this.workData.work2);
  }

  get work3Str() {
    return this.getTimeStamp(this.workData.work3);
  }
}
