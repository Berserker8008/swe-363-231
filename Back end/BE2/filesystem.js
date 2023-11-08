const fs = require('fs');
const path = require('path');
const process = require('process');


async function jpg_text() {
    const source = process.argv[2];
    const destination = process.argv[3];
    // console.log(source);

    const files = await fs.readdir(source,(err,data) => {
        if (err) throw err;
        // console.log(data);

        const jpgfilter = data.filter(file =>
            path.extname(file) === '.jpg')
        
        // console.log(jpgfilter);
            
        if(!fs.existsSync(destination)){
            fs.mkdirSync(destination);
            console.log("created new directory")
        }
        if(jpgfilter.length === 0)
            console.log("no jpg files found")
        else
            jpgfilter.forEach(file => {
                const sourcepath = path.join(source,file);
                const destinationpath = path.join(destination,file);
                // console.log(sourcepath);
                // console.log(destinationpath);
                fs.copyFileSync(sourcepath,destinationpath);
                console.log("Files copied")
            });


    });

    
}   

jpg_text()