<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{smoothie.title}} Smoothie</h2>
    </div>
</template>

<script>
import db from "@/firebase/init";
export default {
    name: "EditSmoothie",
    data() {
        return {
            smoothie: null
        };
    },
    created() {
        let ref = db
            .collection("smoothies")
            .where("slug", "==", this.$route.params.smoothie_slug);
        ref.get().then(snapshot => {
            snapshot.forEach(element => {
                this.smoothie = element.data();
                this.smoothie.id = element.id;
            });
        });
    }
};
</script>

<style  scoped>
</style>