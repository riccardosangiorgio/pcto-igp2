 let posts = [{
    title: "Title 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
}, {
    title: "Title 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
}];

window.onload = () => {

    const container = document.querySelector("#posts");
    
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        let div = document.createElement("div");
        div.classList.add("post");

        let h4 = document.createElement("h4");
        h4.innerHTML = post.title;

        let p = document.createElement("p");
        p.innerHTML = post.body;

        div.appendChild(h4);
        div.appendChild(p);

        container.appendChild(div);
    }

}