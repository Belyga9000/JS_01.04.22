<template>
    <div class="filter container">
        <p class="filter-text">filter</p>
        <ul class="filter-list">
            <li class="filter-list_menu">trending now</li>
            <li class="filter-list_menu">size</li>
            <li class="filter-list_menu">price</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "catalogfilter"
}
</script>

<style lang="scss">
    .filter {
        text-transform: uppercase;
        height: 133px;
        display: flex;
        align-items: center;
    }
    .filter-text {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
    }
    .filter-text::after {
        content: url('~@/assets/img/filter_icon.svg');
        margin-left: 11px; 
    }
    .filter-list {
        display: flex;
        align-self: center;
        margin: auto;
    }
    .filter-list_menu {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #6F6E6E;
        margin-right: 48px;
    }
    .filter-list_menu::after {
        content: url('~@/assets/img/arrow_down.svg');
        margin-left: 10px; 
    }
</style>