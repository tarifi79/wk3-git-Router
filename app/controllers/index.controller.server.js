export function helloWorld(req,res,next){
    res.render('index');
}

export function goodbyeWorld(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>good bye World :D<p>');
}