<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="contact-info">
                <div class="contact-item">
                    <a href="mailto:bhavyavaishnani1503@gmail.com" class="contact-link">
                        bhavyavaishnani1503@gmail.com
                    </a>
                </div>
                <div class="contact-item">
                    <a href="tel:+1234567890" class="contact-link">
                        +1 234-567-890
                    </a>
                </div>
            </div>

        </div>
    </footer>
</template>

<style scoped>
/* Add footer styles here */
.footer {
    background-color: #333;
    color: #fff;
    padding: 15px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.contact-info {
    flex: 1;
    text-align: left;
}

.contact-item {
    margin: 5px 0;
}

.contact-link {
    color: #00a0d2;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.contact-link:hover {
    text-decoration: underline;
}

.contact-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
}


</style>
