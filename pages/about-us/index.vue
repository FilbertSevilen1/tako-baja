<template>
    <div class="container w-full">
            <div class="w-full h-screen bg-slate-600">
                <div class="w-full flex flex-col items-center">
                    <h1 class="text-blue-900 text-2xl md:text-4xl font-bold mt-12 text-center">Tentang Kami</h1>
                </div>
                <div class="w-3/4 mt-8">
                    <h2 class="font-bold text-2xl md:text-3xl">PT. Tako Baja Prima</h2>
                    <h4 id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores nulla laudantium reiciendis. Aspernatur, eaque consectetur! Quis eius veritatis est esse consequuntur. Minus, harum commodi omnis minima nihil explicabo ipsam.</h4>
                    <h4 id="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fuga ullam, minus possimus eaque nihil ut, architecto excepturi, provident aliquid quas. Voluptatum sequi ullam sed doloribus porro fugit provident odio.</h4>
                    <h4 id="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni non unde voluptatem aspernatur maiores hic veritatis corporis eum, ipsa id mollitia sint provident facere aliquam eligendi harum sunt tempora!</h4>
                </div>
            </div>
            <div class="flex flex-row w-full h-screen bg-slate-500">
                    <div class="flex flex-col mx-12 w-1/3 mt-4">
                        <h2 class="font-bold text-2xl md:text-3xl">Visi Perusahaan</h2>
                        <h4 id="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta consectetur dolores ducimus reiciendis, animi iste autem fugit perspiciatis quisquam architecto sapiente nesciunt aliquid rerum asperiores similique nobis voluptates nemo unde.</h4>
                    </div>
                    <div class="line w-1/3"></div>
                    <div class="flex flex-col mx-16 w-1/3 mt-4">
                        <h2 class="font-bold text-2xl md:text-3xl">Misi Perusahaan</h2>
                        <h4 id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, fugit nesciunt quasi facere temporibus eaque autem, repellendus est delectus a placeat veniam consequatur deleniti optio. Sunt harum asperiores veniam.</h4>
                    </div>
            </div>
    </div>
</template>
<script setup>

</script>
<style>
.line{
  border-left: 4px solid black;
  height:auto;
  position: absolute;
  top:0;
  margin-left: -3px;  
}
#desc{
    font-size: large;
    font-style: normal;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: justify;
}
</style>