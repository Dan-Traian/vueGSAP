<template>
  <div class="screen w-full h-full flex flex-col w-full p-10">
    <div class="header w-full p-3 flex items-center">
      <MenuIcon></MenuIcon>
    </div>
    <h1 class="text-3xl bold vesterbro mt-20 pl-3">Hello Dan</h1>
    <Search class="mt-10"></Search>
    <p class="vesterbro text-2xl bold mt-16">Browse by categories</p>
    <div class="categories flex flex-wrap mt-3">
      <Category class="m-1" active="true">Production</Category>
      <Category class="m-1">Business</Category>
      <Category class="m-1">All</Category>
      <Category class="m-1">Testimonies</Category>
      <Category class="m-1">Education</Category>
      <Category class="m-1">Tutorials</Category>
    </div>

    <p class="vesterbro text-2xl bold mt-10 flex items-center">
      Popular
      <IconDisplayer
        class="text-orange-600 ml-10"
        icon-name="chevron-down"
      ></IconDisplayer>
    </p>
    <div class="categories flex flex-wrap mt-3">
      <ShowCard></ShowCard>
    </div>
  </div>
</template>

<script>
import Search from "@/components/_library/inputs/Search";
import MenuIcon from "@/components/_library/_icons/MenuIcon";
import Category from "@/components/Days/01/Category";
import ShowCard from "@/components/Days/01/ShowCard";
import IconDisplayer from "@/components/_library/IconDisplayer";
export default {
  components: { MenuIcon, Search, Category, ShowCard, IconDisplayer },
};
</script>
<style lang="scss" scoped>
.screen {
  background: rgb(254, 222, 214);
  background: linear-gradient(
    222deg,
    rgba(254, 222, 214, 1) 0%,
    rgba(251, 252, 254, 1) 80%
  );
}
</style>
