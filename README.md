# Namaste React

### Parcel
```
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorthm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code 
- Different dev and prod bundles

# Namaste Food

/*
  Header
  - Logo
  - Nav Items
  Body
  - Search
  - RestaurantContainer
    - RestaurantCard 
       -Img
       -Name of Res, star rating, cuisine, delivery time
  Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

```

# React Hooks
(Normal JS Utility Functions)
- useState() - Superpowerful State Variable in react
- useEffect()


# 2 types Routing in web apps
- Client Side Routing  - No fetching page(No network call) when switch the route
- Server Side Routing - fetching page from server when switch route of web App

/*
- Parent Constructor
- Parent render
    
   - First Constructor
   - First Render

   - Second Constructor
   - Second Render

   DOM Updated - In Single Batch
   - First ComponentDidMount
   - Second ComponentDidMount

-Parent ComponentDidMount

*/

// Never update state Variables directly
```javaScript
this.setState({
    count: this.state.count + 1,
})
```

# Redux Toolkit
```
- Install @reduxjs/toolkit and react-redux
- Build Our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector
```