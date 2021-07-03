var axios = require('axios');
var qs = require('qs');

export function getConnection(){
    var config = {
        method: 'get',
        url: 'http://localhost:3000/blogs',
        headers: { 
         
        },
     };
    return axios(config)
    }
    export function postConnection(data) {
        var dataPost = qs.stringify({
            'title': data.title,
            'des': data.des,
            'name': data.name,
            'content':data.content,
        });
        var config = {
            method: 'post',
            url: 'http://localhost:3000/blogs',
            headers: { 
            },
            data : dataPost 
        };
     
        return axios(config)
     }

     export function postUser(data) {
        var dataPost = qs.stringify({
            'name': data.name,
            'phone': data.phone,
            'email': data.email,
            'password':data.password,
        });
        var config = {
            method: 'post',
            url: 'http://localhost:3000/user',
            headers: { 
            },
            data : dataPost 
        };
     
        return axios(config)
     }

     export function getUser(){
        var config = {
            method: 'get',
            url: 'http://localhost:3000/user',
            headers: { 
             
            },
         };
        return axios(config)
        }