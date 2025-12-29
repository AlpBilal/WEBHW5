File Organization
index.html: The main entry point for the browser where the entire React app is injected into the root div.

package.json: Manages project dependencies (React, Vite) and contains the scripts to run the development server.

/src/main.jsx: Acts as the bridge between HTML and React by using ReactDOM to render the <App /> component.

/src/App.jsx: The "brain" of the app; it manages state for the name input and the showProducts toggle using useState.

/src/components/ProductList.jsx: Contains the static product array and uses .map() to render the product list dynamically.

/src/components/Product.jsx: A reusable component that receives title and price via props to display product details.

/src/components/Card.jsx: A layout component using the children prop to wrap content in a styled container without knowing its internal structure.

Challenges Faced
Coming from vanilla JS and Python, switching to React’s declarative style was a major shift that required me to stop manipulating the DOM directly and start relying on state for all UI changes. Handling the controlled input and the showProducts toggle was challenging at first, as I had to ensure the data flow stayed in sync across different components. Additionally, moving from a basic Live Server to a Vite terminal environment added another layer of complexity to my workflow. Using the children prop in the Card component was also a new concept that took some time to get right, especially while trying to keep the code clean for this deadline.