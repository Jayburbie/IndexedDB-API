let db;

const request = indexedDB.open("myDatabase", 1);

request.onerror = function(event) {
  console.log("Error opening database:", event.target.errorCode);
};

request.onupgradeneeded = function(event) {
  db = event.target.result;
  if (!db.objectStoreNames.contains('items')) {
    db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
  }
};

request.onsuccess = function(event) {
  db = event.target.result;
};
