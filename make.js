fs = require('fs');

function w(htmlName){
	try{
		var dataHeader  ='';
		var dataTopbar  ='';
		var dataSidebar ='';
		var dataFooter ='';
		var dataHTML  ='';
		dataHeader     += fs.readFileSync('src/html/header.html');
		dataTopbar     += fs.readFileSync('src/html/topbar.html');
		dataSidebar    += fs.readFileSync('src/html/sidebar.html');
		dataFooter     += fs.readFileSync('src/html/footer.html');
		dataHTML       += fs.readFileSync('src/html/contents/'+htmlName+'.html');

		var newHtml=dataHeader  + '<!-- topbar -->' 
		                    + dataTopbar 
		                    + '<!-- Sidebar -->'      
		   			        + dataSidebar 
		                    + '<!-- content  -->' 
					        + dataHTML  
						    + '<!-- footer -->'      
						    + dataFooter;
		var overfileName='app/'+htmlName+'.html';
		try{
			var fd = fs.openSync(overfileName, 'w');
			buffer = new Buffer('' + newHtml, 'utf8');
			fs.writeSync(fd, buffer, 0, buffer.length, null);
			fs.closeSync(fd);
		}catch(err){
			console.log(err)
		}
	}catch(err){
		console.log(err)
	}
}
function p(htmlName){
	try{
		var dataHTML  ='';
		dataHTML       += fs.readFileSync('src/html/contents/'+htmlName+'.html');
		var overfileName='app/'+htmlName+'.html';
		try{
			var fd = fs.openSync(overfileName, 'w');
			buffer = new Buffer('' + dataHTML, 'utf8');
			fs.writeSync(fd, buffer, 0, buffer.length, null);
			fs.closeSync(fd);
		}catch(err){
			console.log(err)
		}
	}catch(err){
		console.log(err)
	}
}
//这里的 都生成一遍
var files=[
	'index',
	'charts',
	'profile', 
	'file',
	'forms', 
	'form-validation',
	'form-wizard',
	'wysiwyg', 
	'tables', 
	'data-tables', 
	'notifications',
	'panels', 
	'tiles',
	'elements', 
	'icons',
	'buttons',
	'calendar',
	'grid', 
	'typo', 
	'list','email-inbox', 
	'email-read', 
	'email-write', 
	'gallery', 
	'widgets',
	'maps-google', 
	'maps-vector',
	'maps-vector', 
	'invoice', 
	'search', 
	'blank'
]
for (var i = files.length - 1; i >= 0; i--) {
	var out=files[i];
	console.log('make:'+out)
	w(out);
};


var pages=[
	'login',	
	'lockscreen', 
	'landing',
	'offline', 
	'400',
	'401', 
	'403',
	'405',
	'500',
	'503'
]

for (var i = pages.length - 1; i >= 0; i--) {
	var out=pages[i];
	console.log('make:'+out)
	p(out);
};
