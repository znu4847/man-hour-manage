<template>
  <v-container>
    <v-layout column>
      <v-flex>TableArea</v-flex>
      <v-flex>
        <project-panel-group />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import ProjectPanel from "./page/ProjectPanel";
// import ProjectTable from "@/components/table/ProjectTable.vue";
import ProjectPanelGroup from "@/components/page/ProjectPanelGroup.vue";
export default {
  components: {
    // ProjectPanel,
    // ProjectTable, 
    ProjectPanelGroup
  }
};
</script>

<style>
</style>