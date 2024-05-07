// IIFE (Immediately Invoked Function Expression)
(function () {
  (function () {
    // …
  })();

  (() => {
    // …
  })();

  (async () => {
    // …
  })();
});



// How to detect file extension in a string
(function () {
  const getExtensionFromPath = (filename) => {
    return filename.substring(filename.lastIndexOf(".") + 1);
  }

  console.log(getExtensionFromPath('path/image.jpg'));
});



// How to pull url file extension out of url string
(function () {
  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  console.log(getUrlExtension('https://example.com/folder/file.jpg'));
  console.log(getUrlExtension('https://example.com/fold.er/fil.e.jpg?param.eter#hash=12.345'));
});



// Get width height of remote image from url
(function () {
  // Variant 1: Callback
  // const getMeta = (url, cb) => {
  //   const img = new Image();
  //   img.onload = () => cb(null, img);
  //   img.onerror = (err) => cb(err);
  //   img.src = url;
  // };
  //
  // getMeta("https://i.stack.imgur.com/qCWYU.jpg", (err, img) => {
  //   console.log(img.naturalWidth, img.naturalHeight);
  // });

  // Variant 2: Using the load Event listener (Promise):
  // const getMeta = (url) =>
  //   new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = (err) => reject(err);
  //     img.src = url;
  //   });
  //
  // (async () => {
  //   const img = await getMeta('https://i.stack.imgur.com/qCWYU.jpg');
  //   console.log(img.naturalHeight + ' ' + img.naturalWidth);
  // })();

  // Variant 3: Using HTMLImageElement.decode() (Promise)
  const getMeta = async (url) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  };

  getMeta('https://i.stack.imgur.com/qCWYU.jpg').then(img => {
    console.log(img.naturalHeight +' '+ img.naturalWidth);
  });
});



// Read uploaded text file
(function () {
  const readTextFile = (file, callback) => {
    // Check if the file is a text
    if (file.type && !file.type.startsWith('text/')) return '';

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      callback(event?.target?.result || '');
    });

    reader.readAsText(file);
  }
});



// Get file data by url
(function () {
  const getFileDataByUrl = (url) => {
    try {
      let fileSize, fileExtension = '';
      let http = new XMLHttpRequest();

      http.open('HEAD', url, false); // false = Synchronous

      http.send(null); // It will stop here until this http request is complete

      // When we are here, we already have a response, b/c we used Synchronous XHR
      if (http.status === 200) {
        fileSize = +http.getResponseHeader('content-length');
        fileExtension = http.getResponseHeader('content-type');
      }

      return {
        size: isNaN(fileSize) ? 0 : fileSize, // In bytes
        extension: fileExtension.replace(/.+\/|;.+/g, "")
      }
    } catch (error) {
      return { size: 0, extension: '' };
    }
  }

  console.log(getFileDataByUrl('https://images.unsplash.com/photo-1681637524413-0f3be0f3ac73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'));
});



// Determine file size without downloading a file
(function () {
  // Method 1 - Synchronous XMLHttpRequest
  // function getFileSize(url) {
  //   var fileSize = '';
  //   var http = new XMLHttpRequest();
  //   http.open('HEAD', url, false); // false = Synchronous
  //
  //   http.send(null); // It will stop here until this http request is complete
  //
  //   // When we are here, we already have a response, b/c we used Synchronous XHR
  //   if (http.status === 200) {
  //     fileSize = http.getResponseHeader('content-length');
  //     console.log('fileSize = ' + fileSize);
  //   }
  //
  //   return fileSize;
  // }

  // Method 2 - Asynchronous XMLHttpRequest
  function getFileSize(url) {
    var fileSize = '';
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true); // true = Asynchronous
    http.onreadystatechange = function() {
      if (this.readyState == this.DONE) {
        if (this.status === 200) {
          fileSize = this.getResponseHeader('content-length');
          console.log('fileSize = ' + fileSize);
        }
      }
    };
    http.send(); // It will submit request and jump to the next line immediately, without even waiting for request result b/c we used ASYNC XHR call
  }
});



// Remove special characters
(function () {
  const removeSpecialCharacters = (value) => {
    return value.replace(/[<>:"|?*]/g, '');
  };
});



// Як працювати з async/await у циклах
(function () {
  // Функції для прикладу
  function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
  }

  async function delayedLog(item) {
    // Ми можемо використовувати await для Promise який повертається з delay
    await delay();
    console.log(item);
  }

  // Синхронні цикли
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    // Робимо що-небудь з item
  }
  // Або
  array.forEach((item) => {
    // Робимо що-небудь з item
  });

  // Асинхронні цикли
  // 1. Не чекати результату виконання
  // forEach не буде чекати виконання завершення завдання. forEach - синхронна операція.
  async function processArray(array) {
    array.forEach(async (item) => {
      await delayedLog(item);
    });
    console.log('Done!');
  } // Результат: Done! 1 2 3
  // 2. Опрацювання циклу послідовно
  // Щоб дочекатися результату виконання тіла циклу нам потрібно повернутися до циклу "for".
  // Але цього разу ми використовуватимемо його нову версію з конструкцією for..of (Спасибі Iteration Protocol):
  async function processArray(array) {
    for (const item of array) {
      await delayedLog(item);
    }
    console.log('Done!');
  } // Результат: 1 2 3 Done!
  // 3. Обробка циклу паралельно
  // Цей код може запустити кілька delayLog завдань паралельно. Але будьте обережні з великими масивами.
  // Занадто багато завдань може бути занадто важко для CPU і пам'яті.
  async function processArray(array) {
    // Робимо "map" масиву в проміси
    const promises = array.map(delayedLog);
    // Чекаємо коли всі проміси будуть виконані
    await Promise.all(promises);
    console.log('Done!');
  }
  // Не плутайте "паралельні завдання" з прикладу з реальною паралельністю та потоками. Цей код не
  // гарантує паралельного виконання. Все залежатиме від тіла циклу (у прикладі це delayedLog).
  // Запити мережі, webworkers і деякі інші завдання можуть бути виконані паралельно.
});



// Get type and size file via fetch:
(async function () {
  const getКesolutionByUrl = async (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = function() { resolve({ width: this.width, height: this.height }); }
      img.onerror = function() { reject(false); }

      img.src = url
    });
  }

  const getSizeAndTypeByUrl = async (url) => {
    try {
      const response = await fetch(url)
        .then((response) => {
          if (response.status >= 400 && response.status < 600) throw new Error('Bad response from server');

          return response;
        }).catch((error) => { return false; });

      if (!response) return false;

      const data = await response.blob();

      return { size: data.size, type: data.type };
    } catch (error) { return false; }
  }

  const url = 'https://images.unsplash.com/photo-1689913834525-d5796e2a050a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';

  console.log(await getКesolutionByUrl(url));
  console.log(await getSizeAndTypeByUrl(url));
});



// Work with images: grab, get base64, get resolution
(function () {
  const getImageBase64 = (url) => new Promise((resolve) => {
    const img = new Image();

    img.setAttribute('crossorigin', 'anonymous');

    img.onload = () => {
      const canvas = document.createElement('canvas');

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL('image/png');

      resolve(dataURL);
    };

    img.src = url;
  });

  const getImageType = (src) => src.split(';')[0].split('/')[1]; // 'jpeg' 'png' 'webp' 'svg+xml' 'gif'

  const getImageResolution = (src) => new Promise((resolved) => {
    const image = new Image();

    image.onload = function () {
      image.width > 100 && image.height > 100
        ? resolved({ width: image.width, height: image.height })
        : resolved(false);
    };

    image.src = src;
  });

  const processImage = async (imageElement) => {
    const imageLink = imageElement?.src || imageElement.getAttribute('data-src');

    if (!imageLink) return null;

    const src = imageLink.startsWith('http') ? await getImageBase64(imageLink) : imageLink;
    const type = getImageType(src);
    const size = await getImageSize(src);

    const processedImage = (src && size)
      ? { src, type, width: size?.width, height: size?.height }
      : null;

    return processedImage;
  };

  const grabImages = (callback) => {
    const foundImages = [ ...document.getElementsByTagName('img') ];

    Promise.all(foundImages.map((image) => processImage(image))).then((response) => {
      callback(response);
    }).catch((error) => {});
  }
});



// Singelton pattern
(function () {
  class Store {
    constructor() {
      if (!Store._instance) {
        Store._instance = this;

        this.values = [];
      }

      return Store._instance;
    }

    static getInstance() { return this._instance; }

    saveValue(value) { if (value) this.values.push(value); }

    getValues() { return this.values; }
  }

  new Store();

  const values = Store.getInstance().getValues();

  console.log(values);
});



// Use import / export in js
(function () {
  // index.html
  // <script src="js/theme.js" type="module"></script>

  // dom.js
  // class dom {}
  // export { dom };

  // theme.js
  // import { dom } from './dom.js';
  // ...
});



// Is url exists
(function () {
  const urlExists = (url) => {
    try {
      const http = new XMLHttpRequest();

      http.open("HEAD", url, false);
      http.setRequestHeader("Access-Control-Allow-Origin", "*");
      // http.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      // http.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      http.send();

      return !(http.status >= 400 && http.status < 600); // return http.status != 404;
    } catch (error) { return false; }
  }
});



// Await addEventListener or event
(function () {
  const getMeta = async (url) => {
    const img = new Image();
    img.src = url;

    // return new Promise((resolve) =>  btn.onclick = () => resolve());
    return new Promise((resolve) =>  img.onload = function () {
      resolve({
        width: this.width,
        height: this.height,
        naturalWidth: this.naturalWidth
      });
    });

    // img.addEventListener('load', function() {
    //   console.log('>>>>>: ', this.naturalWidth);
    //   console.log('>>>>> this: ', this);
    // });
  }
});



// ...
(function () {

})();
