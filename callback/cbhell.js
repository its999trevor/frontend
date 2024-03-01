//callback hell
/* multiple async tast depends on each other. */

/*download(url,cb)
compress(dfile,cb)
upload(cfile,cb)
*/

function download(url,cb){   //https://youtube.com/vid.mp4
    if(!url.startsWith("http")){
        throw new Error(`url ${url} is wrong`);
    }
    setTimeout(()=>{
        let downloadedFile=url.split("/").pop();
        console.log(downloadedFile);
        cb(downloadedFile);
    },3000)
};
function compress(file,cb){//movie.mp4 --------> movie.zip
    setTimeout(()=>{
        let zipedfile=file.split(".")[0]+".zip";
        console.log(zipedfile);
        cb(zipedfile);
    },2000)
}
function upload(zip,cb){
    let newUrl="http://youtube.com/"+zip;
    setTimeout(()=>{
        console.log("uploaded at new URL:"+newUrl);
        cb("done");
    },1000)
}
download("https://youtube.com/vid.mp4",function(downloadedFile){
    compress(downloadedFile,function(zip){
        upload(zip,function(msg){
            console.log(msg);   
        });
    });
});  //callback hell 
