import React from "react";
import "./style.css";

export default function App() {
  const [source, setsource] = useState()
}

useEffect(() => {
  if (sourceId) {
    FirestoreService.source(sourceId)
      .then(source => {
        if (source.exists) {
          setError(null);
          setGroceryList(groceryList.data());
        } else {
          setError('grocery-list-not-found');
          setGroceryListId();
        }
      })
      .catch(() => setError('grocery-list-get-fail'));
  }s
}, [sourceId, setsourceId]);