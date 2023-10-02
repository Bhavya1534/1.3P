<template>
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <h1 class="logo-text">Bhavya Bhavesh Vaishnani</h1>
            </div>
            <nav class="nav-menu">
                <router-link to="/about" class="nav-item">About</router-link>
                <router-link to="/projects" class="nav-item">Projects</router-link>
                <router-link to="/contact" class="nav-item">Contact</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
/* Add header styles here */
.header {
    background-color: #333;
    color: #fff;
    padding: 15px 0;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo-text {
    font-size: 24px;
    margin: 0;
}

.nav-menu {
    margin-top: 10px;
    display: flex;
}

.nav-item {
    text-decoration: none;
    color: #fff;
    margin: 0 15px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.3s ease;
}

.nav-item:hover {
    text-decoration: underline;
}

/* Media Query for Responsiveness */
@media screen and (max-width: 768px) {
    .header-content {
        flex-direction: column;
    }

    .nav-menu {
        margin-top: 20px;
        display: block;
    }

    .nav-item {
        margin: 10px 0;
    }
}
</style>
