function addData(data) {
    const transaction = db.transaction(['items'], 'readwrite');
    const objectStore = transaction.objectStore('items');
    const request = objectStore.add(data);
  
    request.onsuccess = function(event) {
      console.log('Data added:', event.target.result);
    };
    request.onerror = function(event) {
      console.log('Error adding data:', event.target.errorCode);
    };
  }


  function readData(id, callback) {
    const transaction = db.transaction(['items']);
    const objectStore = transaction.objectStore('items');
    const request = objectStore.get(id);
  
    request.onsuccess = function(event) {
      callback(request.result);
    };
    request.onerror = function(event) {
      console.log('Error reading data:', event.target.errorCode);
    };
  }

  function updateData(data) {
    const transaction = db.transaction(['items'], 'readwrite');
    const objectStore = transaction.objectStore('items');
    const request = objectStore.put(data); // `put` method updates if exists, or adds if doesn't.
  
    request.onsuccess = function(event) {
      console.log('Data updated:', event.target.result);
    };
    request.onerror = function(event) {
      console.log('Error updating data:', event.target.errorCode);
    };
  }

  function deleteData(id) {
    const transaction = db.transaction(['items'], 'readwrite');
    const objectStore = transaction.objectStore('items');
    const request = objectStore.delete(id);
  
    request.onsuccess = function(event) {
      console.log('Data deleted:', event.target.result);
    };
    request.onerror = function(event) {
      console.log('Error deleting data:', event.target.errorCode);
    };
  }
  