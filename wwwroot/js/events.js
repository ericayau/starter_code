function
buildCard(id, title, imageUrl) {
return 
<div class="card bg-base-100 w-96 shadow-sm">
<figure>
<img src="${imageUrl}" alt="${title}" />
</figure>
<div class="card-body">
<h2 class="card-title">${title}</h2>
</div>
</div> 
;
}