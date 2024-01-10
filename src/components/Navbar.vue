<template>
    <div>


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link "> HOME </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about" class="nav-link "> ABOUT </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/resume" class="nav-link "> RESUME </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/projects" class="nav-link "> PROJECTS</RouterLink>
                        </li>

                        <li class="nav-item">
                            <RouterLink to="/testimonial" class="nav-link "> TESTIMONIALS </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link "> CONTACT </RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavbarComp'
}
</script>

<style lang="scss" scoped></style>