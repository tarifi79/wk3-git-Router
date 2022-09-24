export function displayHomepage(req,res,next){
    res.render('index',{title:'Home',page:'home'});
};

export function displayAboutpage(req,res,next){
    res.render('index',{title:'About',page:'about'});
};

export function displayProjectspage(req,res,next){
    res.render('index',{title:'Projects',page:'projects'});
};
export function displayServicespage(req,res,next){
    res.render('index',{title:'Services',page:'services'});
};

export function displayContactpage(req,res,next){
    res.render('index',{title:'Contact',page:'contact'});
};

