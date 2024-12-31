### **Drawing App: Interactive Canvas with JavaScript**



#### **Key Features:**
1. **Canvas Creation and Resizing:**
   The canvas is dynamically created to fit the window size, leaving space for a sidebar. It also resizes when the window is resized.

   ```javascript
   createCanvas(window.innerWidth - 60, window.innerHeight);  // Creates a canvas
   ```

2. **Drawing Lines:**
   The `draw()` function is continuously called, and if the mouse is pressed, the app captures the mouse position and draws lines based on the selected color and stroke weight.

   ```javascript
   if (mouseIsPressed) {
       const point = { x: mouseX, y: mouseY, color: colorInput.value, weight: weight.value };
       currentPath.push(point);  // Adds a new point to the path
   }
   ```

3. **Storing Paths:**
   Every time the mouse is pressed, a new path is started, and all points are stored in the `paths` array to preserve previous drawings.

   ```javascript
   paths.push(currentPath);  // Adds the current path to the paths array
   ```

4. **Clearing the Canvas:**
   The canvas can be cleared by clicking the "Clear" button. This resets the canvas and clears all drawn paths.

   ```javascript
   clear.addEventListener('click', () => {
       paths.splice(0);  // Clears the stored paths
       background(255);  // Resets the canvas to white
   });
   ```

5. **Responsive Canvas:**
   The canvas dynamically adjusts its size whenever the window is resized, ensuring that the drawing area always fits the viewport.

   ```javascript
   resizeCanvas(window.innerWidth - 60, window.innerHeight);  // Resizes canvas when window is resized
   ```

