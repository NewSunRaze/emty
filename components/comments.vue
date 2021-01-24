<template>
<div class="container">
    <h3>Comments (3)</h3>
    <div class="posts_container">
        <div class="post">
            <div class="row">
                <div class="userName_logo">Y</div>
                <div>
                    <p class="userName"><span>UserName</span><spnan> · </spnan><spnan>1h</spnan><spnan> · </spnan><spnan class="gold">Autor</spnan></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ratione.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.posts_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.post{
    margin-bottom: 20px;
}
.post .row{
    align-items: top;
}
.post p{
    text-align: left;
}
.contaier{
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
}
.userName_logo{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-align: center;
    padding: 3px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.userName{
    margin-top: 5px ;
    color: #EED3E3;
}
.gold{
    color: #BB9532;

}
</style>