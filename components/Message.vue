<template>
 <div class="chat-container">
   <div class="thumbnail-container">
     <img src="https://avatars1.githubusercontent.com/u/48335987?s=400&u=3b42f3855e175eb7f850bf3c28ff2262bfd446_400x400.jpg" />
   </div>
   <div class="message-container">
     <div class="user-name">koukic</div>
     <div class="message">今日も良い天気ですね</div>
   </div>
 </div>
</template>

<style scoped>
.chat-container {
 display: flex;
 padding: 8px;
}

.thumbnail-container {
 margin-right: 16px;
}

.thumbnail-container img {
 width: 50px;
 height: 50px;
 border-radius: 10px;
}

.user-name {
 font-weight: bold;
}
</style>
