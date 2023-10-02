<template>
    <div class="about-me">
        <h1>{{ name }}</h1>
        <p>{{ bio }}</p>
                    <p> Front - End Technologies: HTML5, CSS3, JavaScript, React, Vue.js </p>
                    <p>Back-End Technologies: Node.js, Express.js, Python (Django)</p>
                    <p>Responsive Web Design</p>
                    <p>UI/UX Design Principles</p>
                    <p>Cross-Browser Compatibility</p>
                    <p>Version Control (Git)</p>
                    <p>Agile Development Methodologies</p>
                    <p>Web Performance Optimization</p>
                    <p>Problem Solving and Debugging</p>
                    <p>Strong Communication and Team Collaboration</p>
        <ul>
            <li v-for="interest in interests" :key="interest">{{ interest }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Bhavya Bhavesh Vaishnani",
            bio: "Experienced web developer with a strong background in designing and implementing innovative web applications. Adept at collaborating with cross-functional teams to drive project success. Passionate about staying up-to-date with the latest web development technologies and trends.",
            interests: ["Interest 1", "Interest 2", "Interest 3"],
        };
    },
};
</script>

<style scoped>
.about-me {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}
</style>
