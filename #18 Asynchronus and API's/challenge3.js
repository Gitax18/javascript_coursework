/**
 Your tasks:
    PART 1
    1. Write an async function 'loadNPause' that recreates Challenge #2, this time
        using async/await (only the part where the promise is consumed, reuse the
        'createImage' function from before)
    2. Compare the two versions, think about the big differences, and see which one
        you like more
    3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
        in the dev tools Network tab

    PART 2
    1. Create an async function 'loadAll' that receives an array of image paths
        'imgArr'
    2. Use .map to loop over the array, to load all the images with the
        'createImage' function (call the resulting array 'imgs')
    3. Check out the 'imgs' array in the console! Is it like you expected?
    4. Use a promise combinator function to actually get the images from the array 😉
    5. Add the 'parallel' class to all the images (it has some CSS styles)

Test data - Part 2:
        ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']
        To test, turn off the 'loadNPause' function
 */

const imageContainer = document.querySelector('.images');
let image;

const wait = (seconds) => 
{
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    })
}

const img1= `img\\img-1.jpg`;
const img2= `img\\img-2.jpg`;
const img3= `img\\img-3.jpg`;

// function returns image elements as promise
function createImage(imgPath){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function(){
            imageContainer.append(img);
            resolve(img);
            return ;
        });

        img.addEventListener('error', ()=>{
            reject('image not found');
        })
    });
}


async function loadNPause(){
    try{
        const im1 = await(createImage(img1));
        const wt1 = await wait(.5);
        im1.style.opacity = '0';
        im1.style.position = 'absolute';
        const im2 = await(createImage(img2));
        const wt2 = await wait(.5);
        im2.style.opacity = '0';
        im2.style.position = 'absolute';
        const im3 = await(createImage(img3));
        const wt3 = await wait(.5);
        im3.style.opacity = '0';
        im3.style.position = 'absolute';
    }catch(err){
        alert(err.message)
    }

}

// loadNPause()

async function loadAll(arrImg){
    try{
        const imageEle = arrImg.map(img => createImage(img));
        Promise.all(imageEle).then(res => res.forEach(img =>{
            img.classList.add('parallel')
        }));

    } catch(err){
        console.error(err.message)
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);