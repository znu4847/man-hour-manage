import ProjectDailyWorkTime from "@/js/mhm/timetable/daily/ProjectDailyWorkTime";

export default class ProjectMonthlyWorkTime {
  constructor(projectData) {
    this.projectData = projectData;
    if (
      projectData.dailyWorkTimeList === null ||
      projectData.dailyWorkTimeList === undefined
    )
      projectData.dailyWorkTimeList = [];
    if (!projectData.projectName) projectData.projectName = "";
    if (!projectData.projectCd) projectData.projectCd = "";
  }

  get projectCd() {
    return this.projectData.projectCd;
  }

  get header() {
    return {
      title: this.projectData.projectName,
      projectCd: this.projectData.projectCd
    };
  }

  get dailyWorkTimeList() {
    let list = [];
    this.projectData.dailyTimeList.forEach(row =>
      list.push(new ProjectDailyWorkTime(row))
    );
    return list;
  }
}
