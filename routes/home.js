
async function Home (req,res,next) {
    
    res.status(200).json({msg: "Home Page"})
    console.log('home Page');
}


module.exports =  Home
