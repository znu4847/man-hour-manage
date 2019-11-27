import ProjectDailyWorkTime from "@/js/mhm/timetable/daily/ProjectDailyWorkTime";

export default class ProjectMonthlyWorkTime {
  constructor(projectData) {
    console.log("pjr mnt const");
    console.log(projectData);
    this.projectData = projectData;
  }

  get header() {
    return {
      title: this.projectData.projectName,
      projectCd: this.projectData.projectCd
    };
  }

  get dailyTimeList() {
    let list = [];
    this.projectData.dailyTimeList.forEach(row =>
      list.push(new ProjectDailyWorkTime(row))
    );
    return list;
  }
}
