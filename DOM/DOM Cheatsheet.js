// Selecting Elements
document.getElementById('id'); // Selects an element by its ID
document.querySelector('selector'); // Selects the first element that matches the CSS selector
document.querySelectorAll('selector'); // Selects all elements that match the CSS selector
element.querySelector('selector'); // Selects the first descendant element of the specified element that matches the CSS selector

// Manipulating Elements
document.createElement('tag'); // Creates a new element with the specified tag name
element.appendChild(child); // Appends a child node as the last child of a node
element.removeChild(child); // Removes a child node from the DOM
element.innerHTML = 'htmlString'; // Sets or gets the HTML content of an element
element.textContent = 'text'; // Sets or gets the text content of an element (ignores HTML tags)

// Attributes
element.getAttribute('attribute'); // Gets the value of the specified attribute
element.setAttribute('attribute', 'value'); // Sets the value of the specified attribute
element.removeAttribute('attribute'); // Removes the specified attribute from an element

// CSS Classes
element.classList.add('class'); // Adds one or more classes to an element
element.classList.remove('class'); // Removes one or more classes from an element
element.classList.toggle('class'); // Toggles a class on or off based on its presence

// Traversal
element.parentNode; // Returns the parent node of the specified element
element.childNodes; // Returns a collection of child nodes of the specified element
element.children; // Returns a collection of child elements of the specified element
element.nextSibling; // Returns the next sibling node of the specified element
element.previousSibling; // Returns the previous sibling node of the specified element

// Events
element.addEventListener('event', handler); // Attaches an event handler to the specified element
element.removeEventListener('event', handler); // Removes an event handler from the specified element
// Common events: 'click', 'mouseover', 'keydown', 'submit', etc.

// Miscellaneous
document.getElementById('id').focus(); // Sets focus on the specified element
document.getElementById('id').scrollIntoView(); // Scrolls the specified element into view
document.readyState; // Returns the current state of the document (e.g., 'loading', 'interactive', 'complete')
