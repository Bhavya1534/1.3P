<template>
    <div class="contact">
        <h2>Contact Me</h2>
        <p>If you have any questions or inquiries, feel free to get in touch with me using the form below:</p>

        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="formData.message" required></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // You can add your code here to handle form submission, like sending an email or making an API request.
            // For this example, we'll simply log the form data to the console.
            console.log(this.formData);

            // Optionally, you can clear the form fields after submission.
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        }
    }
};
</script>

<style scoped>
.contact {
    padding: 20px;
    background-color: #f0f0f0;
}

.contact h2 {
    text-align: center;
}

.contact p {
    text-align: center;
}

.contact form {
    max-width: 400px;
    margin: 0 auto;
}

.contact .form-group {
    margin-bottom: 15px;
}

.contact label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.contact input[type="text"],
.contact input[type="email"],
.contact textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact button {
    display: block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
