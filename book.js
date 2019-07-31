$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"book.json",
        success:function(data){
           var f=data.articles;
          
           var output="<table class='table'><thead><tr><th>name</th><th>image</th><th>author</th><th>description</th></tr></thead>"
           for(var j in f){
               output +="<tr><td>"+f[j].name+"</td>"
               output +="<td><img src="+f[j].image+"style=width:150px;height:100px></td>"
               output +="<td>"+f[j].author+"</td>"
               
               output +="<td>"+f[j].description+"</td></tr>"
           };
           output +='</table>'
            $('.result').html(output)
            } 
            
        });
    })