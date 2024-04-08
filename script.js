const chatai=document.getElementById("chat-ai");
const chatwiki=document.getElementById("chat-wiki");
const chat_window=document.getElementById("message_container");
const chat_close=document.getElementById("close_message");
const chat_show=document.getElementById("show_chat");
const chat_title=document.getElementById("chat_title");


// Chat logic for the AI chat bot
chatai.onclick=()=>{
    console.log("the ai chat was clicked!");
    chat_title.innerText="AI Chat";
    chat_window.style.display="block";
}


// Chat logic for the wikipedia chatbot
chatwiki.onclick=()=>{
    chat_title.innerText="WikiChat";
    chat_window.style.display="block";
}

// Chat window logic
chat_close.onclick=()=>{
    console.log("Close!");
    chat_window.style.display="none";
}
chat_show.onclick=()=>{
    console.log("Show");
    chat_window.style.display="block";
}