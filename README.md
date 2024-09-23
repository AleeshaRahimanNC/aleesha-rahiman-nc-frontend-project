# Wefo

## Project Description
Wefo is a frontend web application built using React. It leverages various modern technologies like FontAwesome, Bootstrap, React Icons, and React Router DOM for smooth UI/UX design and functionality. The project includes several reusable components, custom styles, and routing for easy navigation.

## Project Structure

### **Folders**:
The `src` folder contains the following structure:
- **Assets**: Contains static assets like images.
- **Components**:
  - `AboutUs`: Component for the "About Us" section.
  - `ContactForm`: Component for the contact form.
  - `Footer`: Contains the footer layout.
  - `Header`: Contains the header layout.
  - `Navbar`: Handles navigation bar functionality.
  - `Services`: Contains the services we provide.
  - `Strip`: A strip layout for banners.
  - `Testimonials`: Displays customer testimonials.
  - `Routing.jsx`: Defines routing between different pages.
- **Pages**:
  - `Home.jsx`: The home page layout.
  - `Home.css`: The styling for the home page.

### **Files**:
- `App.js`: Main entry file for the app.
- `App.css`: Global styling for the app.
- `index.js`: Root file for rendering the app into the DOM.
- `index.css`: Global styles used across the project.
- `.gitignore`: Specifies files to ignore in version control.
- `config-overrides.js`: Contains overrides for the Create React App configuration.
- `jsconfig.json`: Used for defining path aliases.
- `package-lock.json` and `package.json`: Handle package management.

## Packages and Libraries
This project uses the following packages:
- React 18.3.1
- React Bootstrap 2.10.4
- Bootstrap 5.3.3
- FontAwesome (Core, Brands, Regular, Solid)
- React Router DOM 6.26.2
- React Icons 5.3.0

## Installation and Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (version 14 or above)
- npm (Node Package Manager)

### Running the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/wefo.git

2. **Navigate into the Project Directory**:
   ```bash
   cd wefo

3. **Install Dependencies**:
   ```bash
   npm install

4. **Start the Development Server**:
   ```bash
   npm start

5. **Building the Project for Production**:
   ```bash
   npm run build

### Path Management
Path aliases have been set up using `react-app-rewired` and `react-app-rewire-alias`. To add new aliases or modify the existing ones, refer to the `config-overrides.js` and `jsconfig.json` files.