<template>
    <div>
            <div class="row bg-dark">
                <p class="lead"> Siseko Portfolio &copy;
                    <span>
                        {{ currentYear }}
                    </span>
                </p>
            </div>
        
        <div>

            
            <a
                href="https://www.linkedin.com/in/siseko-nonyongo-a52629236/?msgControlName=view_message_button&msgConversationId=2-NDdkODcyZWMtN2FlZi00YWNjLTk4MGItMzk1ZTY5NWU1NzU5XzAxMA%3D%3D&msgOverlay=true"><img
                    width="25px" height="25px" src="https://i.postimg.cc/HWvCbZ7r/den-removebg-preview.png"
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

<style > 
</style>