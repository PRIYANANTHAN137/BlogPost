import React, { useState } from 'react';
import BlogPost from './BlogPost';
import quotes from './quotes.json';
const blogPosts = [
{
title: 'Title - TRAIN DREAMS',
content:"If I was tasked with proving that literary awards are a cruel joke and that life is nothing but a bleak and meaningless trudge toward the grave, Exhibit A would be what I have dubbed The Great Pulitzer Prize for Fiction Travesty of 2012. 2012 was, of course, the year the Pulitzer board (not the jury) decided that no book published in the previous twelve months merited the most prestigious honor in American letters, despite the fact that the trinity of finalists included Denis Johnson’s hallucinatory masterwork Train Dreams, as well as Karen Russell’s lushly brilliant debut novel Swamplandia! and David Foster Wallace’s unfinished opus The Pale King.Michael Cunningham in a rather wonderful letter to the New Yorker in the wake of the non-decision). Train Dreams may well be the 21st century’s most perfect novella (he said, having of course read them all...). It’s the incantatory story of a turn-of-the-century logger and railroad laborer, Robert Grainier, who loses his family to a wildfire and retreats deep into the woods of the Idaho panhandle as the country modernizes around him. Johnson’s spare, strange, elegiac prose conjures a world that feels both ancient and ephemeral, full of beauty and menace and deep sorrow. As Anthony Doerr wrote in his New York Times review: “His prose tiptoes a tightrope between peace and calamity, and beneath all of the novella’s best moments, Johnson runs twin strains of tenderness and the threat of violence.” An American epic in miniature, Train Dreams is a visionary portrait of soul untethered from civilization, a man stoically persevering on his own hermetic terms in the face of unimaginable tragedy. A haunted and haunting reverie.",
author:"Dan Sheehan"
}
];

function getRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

function BlogList() {
const [selectedPost, setSelectedPost] = useState(null);
const handlePostClick = (index) => {
setSelectedPost(blogPosts[index]);
};
return (
<div>
<h1>Blog Posts</h1>
<ul>
{blogPosts.map((post, index) => (
<li key={index} onClick={() => handlePostClick(index)}>
{post.title}
</li>
))}
</ul>
{selectedPost && (
<BlogPost
title={selectedPost.title}
content={`${selectedPost.content}\n${getRandomQuote()} `}
author={selectedPost.author}
/>
)}
</div>
);
}

export default BlogList;