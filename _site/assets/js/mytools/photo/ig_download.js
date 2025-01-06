function downloadVideo() {
    var videoLink = document.getElementById("videoLink").value;
    var downloadLink = document.getElementById("downloadLink");
    var errorMessage = document.getElementById("errorMessage");

    // Check if the link is valid
    if (videoLink.includes("instagram.com") && videoLink.includes("/p/")) {
        var videoId = videoLink.split("/p/")[1].split("/")[0];
        var videoUrl = "https://www.instagram.com/p/" + videoId + "/?__a=1";

        fetch(videoUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.graphql && data.graphql.shortcode_media && data.graphql.shortcode_media.video_url) {
                    var downloadUrl = data.graphql.shortcode_media.video_url;
                    downloadLink.innerHTML = "<a href='" + downloadUrl + "' download>Click here to download the video</a>";
                    errorMessage.innerHTML = "";
                } else {
                    errorMessage.innerHTML = "Video not found. Please check the link.";
                    downloadLink.innerHTML = "";
                }
            })
            .catch(error => {
                errorMessage.innerHTML = "An error occurred. Please try again.";
                downloadLink.innerHTML = "";
            });
    } else {
        errorMessage.innerHTML = "Invalid Instagram video link.";
        downloadLink.innerHTML = "";
    }
}