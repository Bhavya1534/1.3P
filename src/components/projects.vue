<template>
    <div class="projects">
        <h2>Projects</h2>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank">View Project</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: "Project 1",
                   
                    link: "https://github.com/Bhavya1534/1.2P",
                },
                {
                    id: 2,
                    name: "Project 2",
                    
                    link: "https://github.com/Bhavya1534/2.2C",
                },
                {
                    id: 3,
                    name: "Project 3",
                    
                    link: "https://github.com/Bhavya1534/2.1C",
                },
            ],
        };
    },
};
</script>

<style scoped>
.projects {
    padding: 20px;
    background-color: #f0f0f0;
}

.projects ul {
    list-style-type: none;
    padding: 0;
}

.projects li {
    margin-bottom: 20px;
}

.projects h2 {
    text-align: center;
}

.projects a {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 5px;
}
</style>
