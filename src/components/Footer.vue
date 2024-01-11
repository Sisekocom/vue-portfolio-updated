<template>
    <div>
        <div class="row bg-dark text-light">
            <p class="lead"> Siseko Portfolio &copy;
                <span>
                    {{ currentYear }}
                </span>
            </p>
            <a
                href="https://www.linkedin.com/in/siseko-nonyongo-a52629236/?msgControlName=view_message_button&msgConversationId=2-NDdkODcyZWMtN2FlZi00YWNjLTk4MGItMzk1ZTY5NWU1NzU5XzAxMA%3D%3D&msgOverlay=true"><img
                    width="50px" height="50px"
                    src="https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-1024.png"
                    loading="lazy"></a>

        </div>


    </div>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>
