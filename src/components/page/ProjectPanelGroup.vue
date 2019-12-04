<template>
  <v-container fluid>
    <v-pagination
      v-model="page"
      :length="pageCount"
    />
    <v-data-iterator
      :items="projectDataList"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="projectData in props.items"
            :key="projectData.projectCd"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <project-table :project-data="projectData" />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import UserProjectWorkData from "@/js/mock/UserProjectWorkData.json";
import ProjectMonthlyWorkTime from "@/js/mhm/timetable/monthly/ProjectMonthlyWorkTime.js";
import ProjectTable from "@/components/table/ProjectTable.vue";
export default {
  components: {
    ProjectTable
  },
  data: () => ({
    restData: [],
    itemsPerPage: 3,
    page: 1,
    itemsPerPageOptions: [4, 8, 12]
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.projectDataList.length / this.itemsPerPage);
    },
    projectDataList() {
      if (this.restData === null) {
        return [];
      }
      let projectDataList = [];
      this.restData.forEach(data => {
        projectDataList.push(new ProjectMonthlyWorkTime(data));
      });
      return projectDataList;
    }
  },
  created() {
    this.getUserProjectWorkData();
  },
  methods: {
    getUserProjectWorkData() {
      this.restData = UserProjectWorkData;
    }
  }
};
</script>
