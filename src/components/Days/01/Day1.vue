<template>
  <Page>
    <h1 class="text-6xl vesterbro bold mb-10">Day 01 : a login screen</h1>
    <div class="screens flex">
      <PhoneTemplate class="m-3"><Screen01></Screen01></PhoneTemplate>
      <PhoneTemplate class="m-3">dasdasd</PhoneTemplate>
      <PhoneTemplate class="m-3">dasdasdasd</PhoneTemplate>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Gallery/Page";
import PhoneTemplate from "@/components/Gallery/PhoneTemplate";
import Screen01 from "@/components/Days/01/Screen01";
export default {
  components: { Page, PhoneTemplate, Screen01 },
};
</script>
