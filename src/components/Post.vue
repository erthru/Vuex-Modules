<template> 
    <div>
        <h4>{{ title }}</h4>
        <p>{{ body }}</p>
        <hr />
    </div>
</template>

<script>
export default {
    props :{
        title: String,
        body: String
    }
};
</script>
