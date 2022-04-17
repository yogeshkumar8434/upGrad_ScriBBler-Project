
var selectname = document.getElementById('uname');
function extand(){
    location.href = "../html/post.html";
    let an=document.getElementById('author').innerHTML=selectname;
    // console.log(an)

}   


const trashBtn = document.getElementsByClassName('delete-icon');
const trashModal = document.getElementById('signInModal');

const noBtn = document.getElementById('noBtn');



for (const ele of trashBtn) {
    ele.addEventListener('click', () => {

        trashModal.style.display = 'block';

    });
}

noBtn.addEventListener('click', () => {
    trashModal.style.display = 'none';
});



// var deletePostModal = document.getElementById("deletePostmodal");
// var cancelDelete = document.getElementById("cancelDelete");
// var confirmDelete = document.getElementById("confirmDelete");
// var selectedPost;
// openDeletePostModal = (deletePostModal, clickedIcon) => {
//   selectedPost = "";
//   openModal(deletePostModal);
//   selectedPost = clickedIcon.closest(".post");
// };

navigateToPost = postThread => {
    var post = postThread.closest(".post");
    var author = post.querySelector(".username p").textContent.trim();
    var postTitle = post.querySelector(".title p").textContent.trim();
    var postContent = post.querySelector(".content").textContent.trim();
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("postTitle", postTitle);
    sessionStorage.setItem("postContent", postContent);
    window.location.href = "../html/post.html";
  };
  // Event Listeners
  deleteIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
      openDeletePostModal(deletePostModal, e.target)
    );
  });
  dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == deletePostModal) {
      deletePostModal.style.display = "none";
    }
  });
  
  cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
  confirmDelete.addEventListener("click", () => deletePost());
  
