```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Initial');

  useEffect(() => {
    console.log('useEffect ran with count:', count, 'and name:', name);
  }, [count, name]); // Include count and name in the dependency array

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Change Name" onPress={() => setName('Updated')}/>
    </View>
  );
};

export default MyComponent;
```