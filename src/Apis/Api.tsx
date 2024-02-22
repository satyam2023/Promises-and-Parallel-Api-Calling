import React from "react";

// const First= fetch(`https://jsonplaceholder.typicode.com/posts/1`);

// const Second=fetch(`https://jsonplaceholder.typicode.com/posts/2`)


// const Third=fetch(`https://jsonplaceholder.typicode.com/posts/3`);

const First=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Api Call Succesful");
    },5000)

});

const Second=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Second Api Call Succesful");
        resolve("Second Api call is not sucess");
    },2000)

})

const Third=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Third Api Call Succesful");
    },1000)

})


function fetchDataAll(){
Promise.all([First,Second,Third]).then((response)=>{
console.log(response);
}).catch((err)=>{
    console.error(err);
})
};



function fetchDataAllSettled(){
    Promise.allSettled([First,Second,Third]).then((response)=>{
    console.log(response);
    }).catch((err)=>{
        console.error(err);
    })
    };

    function fetchDataRace(){
        Promise.race([First,Second,Third]).then((response)=>{
        console.log(response);
        }).catch((err)=>{
            console.error(err);
        })
        };

        function fetchDataAny(){
            Promise.any([First,Second,Third]).then((response)=>{
            console.log(response);
            }).catch((err)=>{
                console.error(err);
            })
            };

      

export {fetchDataRace,fetchDataAll,fetchDataAny,fetchDataAllSettled};