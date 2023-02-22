 let posts = [{
    title: "Title 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
}, {
    title: "Title 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
}];

function createNode (tag, classes, html) {
    let node = document.createElement(tag);
    node.classList.add(...classes);
    node.innerHTML = html;
    return node;
}

function createPost (post) {
    let div = createNode("div", ["post"], "");
    let h4 = createNode("h4", [], post.title);
    let p = createNode("p", [], post.body);
    div.appendChild(h4);
    div.appendChild(p);
    return div;
}

window.onload = () => {
    const container = document.querySelector("#posts");
    const postTitle = document.querySelector("#post-title");
    const postBody = document.querySelector("#post-body");
    const postSubmitButton = document.querySelector("#post-submit");

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        container.appendChild(createPost(post));
    }

    postSubmitButton.addEventListener("click", function (event) {
        if (postTitle.value === "" || postBody.value === "") {
            return;
        }

        event.preventDefault();

        let post = {
            title: postTitle.value,
            body: postBody.value
        };

        posts.push(post);

        container.appendChild(createPost(post));

        postTitle.value = "";
        postBody.value = "";
    });
}



