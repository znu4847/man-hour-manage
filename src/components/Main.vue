<template>
  <v-container>
    <v-layout column>
      <v-flex>TableArea</v-flex>
      <v-flex>
        <project-table />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import ProjectPanel from "./page/ProjectPanel";
import ProjectTable from "@/components/table/ProjectTable.vue";
export default {
  components: {
    // ProjectPanel,
    ProjectTable
  }
};
</script>

<style>
</style>