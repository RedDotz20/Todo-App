// console.log("hello world");
let items = [];
const posts = () => {
	const postsList = {
		id: Date.now(),
		title: "Sample Title 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	};
	items.push(postsList);
};
// const postIds = posts.map((asdfasd) => asdfasd.title);

const postIdsObject = items.((asdfasd) => asdfasd.id);
