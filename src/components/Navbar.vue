<template>
    <div class="navbar">
        <nav class="nav-extented indigo darken-2">
            <div class="nav-content">
                <router-link :to="{name: 'Index'}">
                    <span class="nav-title">Smoothies</span>
                </router-link>
                <a href class="btn-floating btn-large pink">
                    <router-link :to="{name: 'AddSmoothie'}">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {};
    }
};
</script>

<style scoped>
.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icon {
    align-self: a;
}

.btn-floating {
    margin-right: 1em;
}

.darken-2 {
    height: 102px;
}
.nav-title {
    padding: 25px;
}
</style>